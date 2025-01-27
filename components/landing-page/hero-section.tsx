"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Highlight } from "../ui/hero-highlight"

export const HeroSection = () => {
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-secondary/10" />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tighter md:text-6xl">
              Stwórz <span className="gradient-text">Profesjonalne CV</span>
              <br className="hidden md:inline" /> Które Zwiększy Twoją Szansę na
              <Highlight>Zatrudnienie</Highlight>
            </h1>
            <p className="mx-auto max-w-[600px] text-xl text-muted-foreground">
              Szablony, wsparcie AI w pisaniu i eksperckie porady, które pomogą Ci zdobyć wymarzoną pracę.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/login">
              <Button size="lg" className="h-12 px-8">
                Rozpocznij Za Darmo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
