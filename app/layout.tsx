import { Providers } from "@/lib/providers"
import "styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  )
}
