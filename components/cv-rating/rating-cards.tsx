import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card } from "../ui/card"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 8,
      duration: 0.6,
    },
  },
}

interface RatingCardsProps {
  data: {
    cvRecognitionStatus: string
    structureReadability?: string
    keywordAnalysis?: string
    languageAccuracy?: string
    contentConsistency?: string
    atsCompatibility?: string
    sectionsToImprove?: string
    overallSummary?: string
  }
}

export const RatingCards = ({ data }: RatingCardsProps) => {
  if (!data) return null
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2"
    >
      {data.cvRecognitionStatus !== "" && (
        <motion.div variants={item} className="col-span-1 md:col-span-2">
          <Card className="p-4">
            <h3 className="font-semibold">Status</h3>
            <p
              className={cn(
                "mt-2",
                data.cvRecognitionStatus === "Nie rozpoznano prawidłowego CV" ? "text-destructive" : "text-green-600"
              )}
            >
              {data.cvRecognitionStatus}
            </p>
          </Card>
        </motion.div>
      )}

      {data.structureReadability != undefined && (
        <motion.div variants={item}>
          <Card className="h-full p-4">
            <h3 className="font-semibold">Struktura i czytelność</h3>
            <p className="mt-2">{data.structureReadability}</p>
          </Card>
        </motion.div>
      )}

      {data.keywordAnalysis != undefined && (
        <motion.div variants={item}>
          <Card className="h-full p-4">
            <h3 className="font-semibold">Analiza słów kluczowych</h3>
            <p className="mt-2">{data.keywordAnalysis}</p>
          </Card>
        </motion.div>
      )}

      {data.languageAccuracy != undefined && (
        <motion.div variants={item}>
          <Card className="h-full p-4">
            <h3 className="font-semibold">Poprawność językowa</h3>
            <p className="mt-2">{data.languageAccuracy}</p>
          </Card>
        </motion.div>
      )}

      {data.contentConsistency != undefined && (
        <motion.div variants={item}>
          <Card className="h-full p-4">
            <h3 className="font-semibold">Spójność treści</h3>
            <p className="mt-2">{data.contentConsistency}</p>
          </Card>
        </motion.div>
      )}

      {data.atsCompatibility != undefined && (
        <motion.div variants={item}>
          <Card className="h-full p-4">
            <h3 className="font-semibold">Kompatybilność z ATS</h3>
            <p className="mt-2">{data.atsCompatibility}</p>
          </Card>
        </motion.div>
      )}

      {data.sectionsToImprove != undefined && (
        <motion.div variants={item}>
          <Card className="h-full p-4">
            <h3 className="font-semibold">Sekcje do poprawy</h3>
            <p className="mt-2">{data.sectionsToImprove}</p>
          </Card>
        </motion.div>
      )}

      {data.overallSummary != undefined && (
        <motion.div variants={item} className="col-span-1 md:col-span-2">
          <Card className="h-full p-4">
            <h3 className="font-semibold">Podsumowanie</h3>
            <p className="mt-2">{data.overallSummary}</p>
          </Card>
        </motion.div>
      )}
    </motion.div>
  )
}
