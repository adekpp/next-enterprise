'use client'
import { motion } from "framer-motion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Anna Kowalska",
    role: "Programistka",
    content:
      "Ta platforma pomogła mi stworzyć CV, dzięki któremu dostałam wymarzoną pracę w czołowej firmie technologicznej.",
    avatar: "AK",
  },
  {
    name: "Michał Nowak",
    role: "Manager Marketingu",
    content: "Sugestie AI były niesamowicie pomocne. Moje CV teraz idealnie podkreśla moje osiągnięcia.",
    avatar: "MN",
  },
  {
    name: "Ewa Dąbrowska",
    role: "UX Designer",
    content:
      "Szablony są piękne i profesjonalne. Po aktualizacji CV otrzymałam wiele zaproszeń na rozmowy kwalifikacyjne.",
    avatar: "ED",
  },
]

export const TestimonialsSection = () => {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold">Co Mówią Nasi Użytkownicy</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground">
            Dołącz do tysięcy zadowolonych użytkowników, którzy odmienili swoją karierę dzięki naszej platformie.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4 flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="flex-grow text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
