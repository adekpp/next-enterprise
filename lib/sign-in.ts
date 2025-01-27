"use server"
import { signIn } from "@/auth"

export async function SignInOAuth(provider: string) {
  await signIn(provider)
}
