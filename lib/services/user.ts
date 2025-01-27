import { prisma } from "@/prisma"

export const getUserCredits = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  return user?.credits
}
