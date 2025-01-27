import { Mail } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar/navbar"

export default function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-1 items-center justify-center md:justify-start">
            <span className="text-sm text-muted-foreground">© 2025 CV Builder Pro. Wszelkie prawa zastrzeżone.</span>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="mailto:kontakt@cvbuilder.pro"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              <span>Kontakt</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
