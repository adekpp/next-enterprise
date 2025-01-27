"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-secondary/20" />
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8 text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">Gotowy na Zmianę Swojej Kariery?</h2>
          <p className="mx-auto max-w-[600px] text-xl text-muted-foreground">
            Dołącz do tysięcy zadowolonych użytkowników, którzy już stworzyli imponujące CV dzięki naszej platformie.
          </p>
          <Button size="lg" className="h-12 px-8" asChild>
            <Link href="/login">
              Rozpocznij Teraz
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
