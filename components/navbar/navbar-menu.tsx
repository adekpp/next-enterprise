"use client"

import { motion } from "framer-motion"
import { FileTextIcon, PenToolIcon, ScaleIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItemVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
}

const underlineVariants = {
  initial: { width: "0%" },
  active: { width: "100%" },
}

export const NavbarMenu = () => {
  const pathname = usePathname()
  return (
    <div className="flex w-full flex-1 items-center space-x-4 text-sm">
      <motion.div variants={navItemVariants} initial="initial" whileHover="hover" className="relative">
        <Link
          href="/cv-rating"
          className={cn(
            "flex items-center space-x-2 text-muted-foreground transition-colors duration-200 hover:text-primary",
            pathname === "/cv-rating" && "text-primary"
          )}
        >
          <ScaleIcon className="h-4 w-4" />
          <span>Analizuj CV</span>
        </Link>
        {pathname === "/cv-rating" && (
          <motion.div
            className="absolute -bottom-[2px] left-0 h-0.5 bg-primary"
            initial="initial"
            animate="active"
            variants={underlineVariants}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
      <motion.div variants={navItemVariants} initial="initial" whileHover="hover" className="relative">
        <Link
          href="/cv-creation"
          className={cn(
            "flex items-center space-x-2 text-muted-foreground transition-colors duration-200 hover:text-primary",
            pathname === "/cv-creation" && "text-primary"
          )}
        >
          <FileTextIcon className="h-4 w-4" />
          <span>Utwórz CV</span>
        </Link>
        {pathname === "/cv-creation" && (
          <motion.div
            className="absolute -bottom-[2px] left-0 h-0.5 bg-primary"
            initial="initial"
            animate="active"
            variants={underlineVariants}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
      <motion.div variants={navItemVariants} initial="initial" whileHover="hover" className="relative">
        <Link
          href="/cover-letter"
          className={cn(
            "flex items-center space-x-2 text-muted-foreground transition-colors duration-200 hover:text-primary",
            pathname === "/cover-letter" && "text-primary"
          )}
        >
          <PenToolIcon className="h-4 w-4" />
          <span>Utwórz List motywacyjny</span>
        </Link>
        {pathname === "/cover-letter" && (
          <motion.div
            className="absolute -bottom-[2px] left-0 h-0.5 bg-primary"
            initial="initial"
            animate="active"
            variants={underlineVariants}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    </div>
  )
}
