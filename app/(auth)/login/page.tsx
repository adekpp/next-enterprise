"use client"
import { motion } from "framer-motion"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SignInOAuth } from "@/lib/sign-in"

const SignIn = () => {
  const handleSignIn = async (provider: string) => {
    await SignInOAuth(provider)
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-secondary/10" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="w-full max-w-md border-2 border-primary/10 bg-background/95 shadow-lg backdrop-blur-sm transition-all hover:shadow-primary/5">
          <CardHeader className="space-y-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <CardTitle className="text-4xl font-bold tracking-tighter">
                <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Zaloguj się
                </span>
              </CardTitle>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
              <CardDescription className="text-lg text-muted-foreground/80">
                Wybierz metodę logowania, aby kontynuować
              </CardDescription>
            </motion.div>
          </CardHeader>

          <CardContent className="space-y-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
              <Button
                variant="outline"
                className="h-12 w-full border-2 bg-background/50 backdrop-blur-sm transition-all hover:bg-primary/5 hover:shadow-md"
                onClick={() => handleSignIn("google")}
              >
                <Icons.google className="mr-2 h-5 w-5" />
                Kontynuuj z Google
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
              <Button
                variant="outline"
                className="h-12 w-full border-2 bg-background/50 backdrop-blur-sm transition-all hover:bg-primary/5 hover:shadow-md"
                onClick={() => handleSignIn("linkedin")}
              >
                <Icons.linkedin className="mr-2 h-5 w-5" />
                Kontynuuj z LinkedIn
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default SignIn
