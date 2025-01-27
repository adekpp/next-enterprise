import { CoinsIcon } from "lucide-react"
import { auth, signOut } from "@/auth"
import { getUserCredits } from "@/lib/services/user"
import { NavbarDropdown } from "./dropdown"
import { Skeleton } from "../ui/skeleton"

export const UserInfo = async () => {
  const session = await auth()
  const handleSignOut = async () => {
    "use server"
    await signOut()
  }

  const credits = session?.user?.email ? await getUserCredits(session?.user?.email) : 0

  return (
    <>
      {session ? (
        <div className="flex items-center space-x-4">
          <div className="inline-flex text-xs text-muted-foreground">
            <p className="mr-2">Twoje Kredyty:</p>
            <span className="inline-flex font-bold text-green-700">
              <CoinsIcon size={18} className="text-amber-500" />
              {credits}
            </span>
          </div>
          <NavbarDropdown email={session?.user?.email || ""} signOut={handleSignOut} />
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <Skeleton className="h-[35px] w-[252px]" />
        </div>
      )}
    </>
  )
}
