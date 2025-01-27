import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { prisma } from "./prisma"

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) {
        return false
      }
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      })

      // If user doesn't exist, create it
      if (!existingUser) {
        await prisma.user.create({
          data: {
            email: user.email!,
            name: user.name || "",
            image: user.image || "",
          },
        })
      }

      return true // Allow sign-in
    },
  },
})
