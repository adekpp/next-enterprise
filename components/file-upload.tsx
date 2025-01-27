import { useState } from "react"

export default function HomePage() {
  const [file, setFile] = useState<File | null>(null)
  const [extractedText, setExtractedText] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0] as File)
    }
  }

  const handleUpload = async () => {
    if (!file) {
      setErrorMessage("Please select a file first.")
      return
    }

    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("/api/extract-text", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const errData = await response.json()
        setErrorMessage(errData.message || "Error extracting text")
        return
      }

      const data = await response.json()
      if (data.text) {
        setExtractedText(data.text)
        setErrorMessage("")
      }
    } catch (error) {
      console.error("Upload error:", error)
      setErrorMessage("An unexpected error occurred.")
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "1rem" }}>
      <h1>Text Extraction Demo</h1>
      <input type="file" accept=".pdf,.docx" onChange={handleFileChange} />
      <button onClick={handleUpload} style={{ marginLeft: 8 }}>
        Upload & Extract
      </button>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <div style={{ marginTop: 20 }}>
        <h3>Extracted Text:</h3>
        <pre style={{ whiteSpace: "pre-wrap" }}>{extractedText}</pre>
      </div>
    </div>
  )
}
