import { signIn } from "../../auth"
import { Button } from "../ui/button"

interface ButtonProps {
  className: string
  children: React.ReactNode
}

export function SignInButton({ className, children }: ButtonProps) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn()
      }}
    >
      <Button type="submit" className={className}>
        {children}
      </Button>
    </form>
  )
}
