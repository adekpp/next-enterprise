"use client"

import { useMutation } from "@tanstack/react-query"
import { CoinsIcon, Loader2Icon } from "lucide-react"
import { useState } from "react"
import { CvAnalysisResponse } from "@/app/api/cv-rating/route"
import { RatingCards } from "@/components/cv-rating/rating-cards"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CvRatingPage() {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string>("")

  const {
    mutate: analyzeCv,
    data,
    isPending,
  } = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/cv-rating", {
        method: "POST",
        body: formData,
      })

      const responseData = (await response.json()) as { message?: string } & Partial<CvAnalysisResponse>

      if (!response.ok) {
        throw new Error(responseData.message || "Wystąpił błąd podczas analizowania CV")
      }

      if (!responseData.cvRecognitionStatus) {
        throw new Error("Nie udało się rozpoznać CV")
      }

      return responseData as CvAnalysisResponse
    },
    onError: (error: Error) => {
      setError(error.message)
    },
  })

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const selectedFile = files[0]
      if (selectedFile instanceof File) {
        setFile(selectedFile)
        setError("")
      }
    }
  }

  const handleUpload = () => {
    if (!file) {
      setError("Please select a file first.")
      return
    }
    setError("")
    analyzeCv(file)
  }
  return (
    <div className="container py-10">
      <Card className="p-6">
        <div className="mb-2 flex items-center">
          <h1 className="text-xl font-bold">Analizuj swoje CV</h1>
          <CoinsIcon className="ml-2 text-amber-500" size={16} />
          <span className="text-green-700 text-sm font-bold">20</span>
        </div>
        <p className="mb-2 text-sm text-muted-foreground">
          Sprawdź swoje CV pod kątem zgodności z wymaganiami stawianymi przez pracodawców.
        </p>

        <div className="space-y-4">
          <div>
            <input
              type="file"
              accept=".pdf,.docx,.doc"
              onChange={handleFileChange}
              className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-primary/90"
            />
            <small className="mt-2 block text-xs text-slate-500">Akceptowane formaty: .pdf, .docx, .doc</small>
            {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
          </div>
          <div className="flex w-full justify-center">
            <Button onClick={handleUpload} disabled={!file || isPending} className="w-full max-w-md">
              {isPending ? (
                <>
                  <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                  Analizowanie...
                </>
              ) : (
                "Analizuj CV"
              )}
            </Button>
          </div>
          {data && <RatingCards data={data} />}
        </div>
      </Card>
    </div>
  )
}
