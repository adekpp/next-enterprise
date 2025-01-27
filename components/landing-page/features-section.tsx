"use client"
import { motion } from "framer-motion"
import { Download, FileText, PenTool, Wand2 } from "lucide-react"
import { CustomTooltip } from "@/components/tooltip"

const features = [
  {
    icon: FileText,
    title: "Profesjonalne Szablony",
    description: (
      <>
        Wybierz spośród dziesiątek szablonów przyjaznych{" "}
        <CustomTooltip
          trigger="ATS"
          content="Applicant Tracking System - system używany przez pracodawców do automatycznego przetwarzania CV"
        />
        , zaprojektowanych przez ekspertów.
      </>
    ),
  },
  {
    icon: Wand2,
    title: "Wsparcie AI",
    description:
      "Pozwól naszej sztucznej inteligencji pomóc Ci napisać przekonującą treść i podkreślić Twoje osiągnięcia.",
  },
  {
    icon: PenTool,
    title: "Łatwa Personalizacja",
    description: "Dostosuj każdy aspekt swojego CV za pomocą naszego intuicyjnego edytora.",
  },
  {
    icon: Download,
    title: "Różne Formaty",
    description: "Eksportuj swoje CV w formacie PDF, Word lub innych formatach odpowiednich dla każdej aplikacji.",
  },
]

export const FeaturesSection = () => {
  return (
    <section className="bg-muted/50 py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold">Wszystko Czego Potrzebujesz</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground">
            Nasza platforma zapewnia wszystkie narzędzia potrzebne do stworzenia profesjonalnego CV, które wyróżni się
            na tle innych.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              <div className="flex h-full flex-col items-center rounded-lg bg-background p-6 shadow-lg transition-shadow hover:shadow-xl">
                <feature.icon className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-center text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
