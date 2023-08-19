import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
export default function Btn () {
    const { data: session } = useSession()
    if(session) {
        return (
            <div className="w-full h-[40px] flex flex-row items-center justify-between">
                <div>
                <button>
                <Link href="/dashboard" class="font-medium text-sm focus:outline-none ">Personal Blogging App</Link>
                </button>
                </div>
                <div>
                <Link href="/profile" class=" dark:text-white font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ">Profile</Link>
                <button onClick={signOut} class=" dark:text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ">Log out</button>
                </div>
            </div>
        )
    }
    return (
        <div className="w-full h-[40px] flex flex-row items-center justify-between ">
            <button>
            <Link href="/" class="font-medium text-sm focus:outline-none ">Personal Blogging App</Link>
            </button>
            <button className="px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
            <Link href="/auth/login" class="font-medium text-sm focus:outline-none ">Log in</Link>
            </button>
        </div>
    )
}