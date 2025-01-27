import { NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"
import { extractTextFromDOCXBuffer } from "lib/docx"
import { extractTextFromPDFBuffer } from "lib/pdf"
export const runtime = "nodejs"

export interface CvAnalysisResponse {
  /** Status rozpoznawania CV */
  cvRecognitionStatus: string
  /** Opis problemów z czytelnością i strukturą w języku polskim */
  structureReadability: string
  /** Analiza użytych i brakujących słów kluczowych (w języku polskim) */
  keywordAnalysis: string
  /** Informacje o błędach językowych, literówkach, powtórzeniach */
  languageAccuracy: string
  /** Ocena spójności i logiki treści (np. brakujące daty, niejasne zakresy obowiązków) */
  contentConsistency: string
  /** Opis elementów utrudniających odczyt przez ATS (np. format pliku, tabele, nietypowe czcionki) */
  atsCompatibility: string
  /** Wskazanie sekcji wymagających uzupełnienia lub poprawy */
  sectionsToImprove: string
  /** Ogólne podsumowanie (bez konkretnych przykładów poprawek) */
  overallSummary: string
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})
/**
 * Handles POST requests to /api/cv-rating
 * Extracts text from CV and returns AI analysis
 */
export async function POST(req: NextRequest) {
  try {
    // 1) Parse form data
    const formData = await req.formData()

    const file = formData.get("file") as File | null
    if (!file) {
      return NextResponse.json({ message: "Brak pliku." }, { status: 400 })
    }

    const fileName = file.name.toLowerCase()
    const allowedExtensions = [".docx", ".doc", ".pdf"]
    if (!allowedExtensions.some((ext) => fileName.endsWith(ext))) {
      return NextResponse.json({ message: "Niepoprawny format pliku. Tylko pliki: .doc, .docx, .pdf" }, { status: 400 })
    }

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Extract text based on file type
    let text = ""
    if (fileName.endsWith(".pdf")) {
      text = await extractTextFromPDFBuffer(buffer)
    }
    if (fileName.endsWith(".docx")) {
      text = await extractTextFromDOCXBuffer(buffer)
    }

    if (!text) {
      return NextResponse.json({ message: "Nie udało się przetworzyć pliku." }, { status: 400 })
    }

    // Create a thread
    const thread = await openai.beta.threads.create()

    // Add a message to the thread
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: text,
    })

    // Run the assistant
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: "asst_ZULlHZgbuwspZOASBRfkCoWP",
    })

    // Wait for the run to complete
    let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id)
    while (runStatus.status === "queued" || runStatus.status === "in_progress") {
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Wait 1 second
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id)
    }

    if (runStatus.status !== "completed") {
      return NextResponse.json({ message: "Wystąpił błąd, spróbuj ponownie za chwillę." }, { status: 500 })
    }

    // Get the messages
    const messages = await openai.beta.threads.messages.list(thread.id)
    const lastMessage = messages.data[0]
    if (!lastMessage || !lastMessage.content[0] || lastMessage.content[0].type !== "text") {
      return NextResponse.json({ message: "Wystąpił błąd, spróbuj ponownie za chwillę." }, { status: 500 })
    }
    console.log(lastMessage.content[0].text.value)

    let analysis = lastMessage.content[0].text.value

    // Extract JSON content using regex
    const jsonMatch = analysis.match(/```json\n?([\s\S]*?)\n?```/)
    if (jsonMatch && jsonMatch[1]) {
      analysis = jsonMatch[1].trim()
    }

    // Parse the analysis string into a JSON object
    try {
      const parsedAnalysis = JSON.parse(analysis)
      return NextResponse.json(parsedAnalysis as CvAnalysisResponse, { status: 200 })
    } catch (error) {
      console.error("Error parsing JSON response:", error)
      return NextResponse.json({ message: "Błąd podczas przetwarzania odpowiedzi." }, { status: 500 })
    }
  } catch (error) {
    console.error("Error while processing file:", error)
    return NextResponse.json({ message: "Wystąpił błąd podczas przetwarzania pliku." }, { status: 500 })
  }
}
