import { FileTextIcon } from "lucide-react"
import Link from "next/link"
import { NavbarMenu } from "./navbar-menu"
import { UserInfo } from "./user-info"

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center px-4">
        <div className="mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <FileTextIcon className="h-6 w-6" />
            <span className="font-bold">CV Builder Pro</span>
          </Link>
        </div>
        <NavbarMenu />
        <UserInfo />
      </div>
    </nav>
  )
}
