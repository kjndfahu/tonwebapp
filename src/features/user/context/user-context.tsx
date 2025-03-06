"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import WebApp from "@twa-dev/sdk"

interface UserData {
    id: number
    first_name: string
    last_name?: string
    username?: string
    language_code: string
    is_premium?: boolean
}

interface UserContextType {
    userData: UserData | null
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
    const [userData, setUserData] = useState<UserData | null>(null)

    useEffect(() => {
        if (WebApp.initDataUnsafe.user) {
            setUserData(WebApp.initDataUnsafe.user as UserData)
        }
    }, [])

    return <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
}

export function useUser() {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider")
    }
    return context
}

