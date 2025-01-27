import { FileCheck, FileText, PenTool } from "lucide-react"
import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function HomePage() {

  return (
    <div className="min-h-screen bg-background">
      {/* Welcome Section */}
      <div className="relative py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-secondary/10" />
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
              Witaj w <span className="gradient-text">CV Builder Pro</span>
            </h1>
            <p className="mx-auto max-w-[800px] text-xl text-muted-foreground">
              Twoja droga do profesjonalnego CV zaczyna się tutaj. Wykorzystaj moc sztucznej inteligencji, aby stworzyć
              dokumenty aplikacyjne, które wyróżnią Cię na tle innych kandydatów.
            </p>
          </div>
        </div>
      </div>

      {/* Features Cards */}
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="#" className="transition-transform hover:scale-105">
            <Card className="h-full">
              <CardHeader>
                <FileCheck className="mb-4 h-10 w-10 text-primary" />
                <CardTitle className="text-xl">Ocena CV przez AI</CardTitle>
                <CardDescription>
                  Otrzymaj szczegółową analizę swojego CV. Dowiedz się, co możesz poprawić, aby zwiększyć swoje szanse
                  na rynku pracy.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="#" className="transition-transform hover:scale-105">
            <Card className="h-full">
              <CardHeader>
                <FileText className="mb-4 h-10 w-10 text-primary" />
                <CardTitle className="text-xl">Generator CV</CardTitle>
                <CardDescription>
                  Stwórz profesjonalne CV od podstaw. Wybierz spośród nowoczesnych szablonów i dostosuj je do swoich
                  potrzeb.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="#" className="transition-transform hover:scale-105">
            <Card className="h-full">
              <CardHeader>
                <PenTool className="mb-4 h-10 w-10 text-primary" />
                <CardTitle className="text-xl">List Motywacyjny</CardTitle>
                <CardDescription>
                  Wygeneruj przekonujący list motywacyjny dopasowany do stanowiska, o które się ubiegasz.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
