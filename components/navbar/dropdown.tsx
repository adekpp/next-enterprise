"use client"
import { ArrowRightLeftIcon, ChevronDownIcon, CoinsIcon, LogOutIcon, Trash2Icon } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"

interface NavbarDropdownProps {
  email: string
  signOut: () => Promise<void>
}

export const NavbarDropdown = ({ email, signOut }: NavbarDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer items-center space-x-2">
          <Button>
            {email} <ChevronDownIcon size={20} />
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Moje konto</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <CoinsIcon size={16} />
          Dodaj kredyty
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ArrowRightLeftIcon size={16} />
          Transakcje
        </DropdownMenuItem>
        <DropdownMenuItem onClick={signOut}>
          <LogOutIcon size={16} />
          Wyloguj się
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-500 hover:text-red-500">
          <Trash2Icon size={16} />
          Usuń konto
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
