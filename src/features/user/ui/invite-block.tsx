"use client"

import { CopyIcon, TgLogo } from "@/shared/icons"
import { useEffect } from "react"

declare global {
    interface Window {
        Telegram?: {
            WebApp?: {
                openTelegramLink: (url: string) => void
            }
        }
    }
}

export const InviteBlock = () => {
    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://telegram.org/js/telegram-web-app.js"
        script.async = true
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    const handleInvite = () => {
        if (window.Telegram?.WebApp?.openTelegramLink) {
            window.Telegram.WebApp.openTelegramLink(
                "https://t.me/share/url?url=YOUR_INVITE_LINK&text=Join%20me%20on%20this%20awesome%20platform!",
            )
        } else {
            window.open(
                "https://t.me/share/url?url=YOUR_INVITE_LINK&text=Join%20me%20on%20this%20awesome%20platform!",
                "_blank",
            )
        }
    }

    return (
        <div className="flex w-full h-[38px] gap-2">
            <div className="bg-border w-[38px] h-[38px] rounded-[15px] p-[1px]">
                <div className="flex w-[38px] h-[38px] bg-gradient items-center justify-center rounded-[15px]">
                    <CopyIcon />
                </div>
            </div>
            <div className="bg-border w-full p-[1px] rounded-[15px] cursor-pointer" onClick={handleInvite}>
                <div className="flex items-center justify-center gap-[5px] h-full bg-gradient w-full text-[16px] text-white font-bold rounded-[15px]">
                    Пригласить друга
                    <TgLogo />
                </div>
            </div>
        </div>
    )
}

