"use client"

import { CopyIcon, TgLogo } from "@/shared/icons"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import toast from "react-hot-toast";

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
    const t = useTranslations('User')
    const [copied, setCopied] = useState(false)
    const inviteLink = "Your invite link"

    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://telegram.org/js/telegram-web-app.js"
        script.async = true
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(inviteLink)
            setCopied(true)
            toast.success("Copied!")
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error("Ошибка копирования:", err)
        }
    }

    const handleInvite = () => {
        const url = `https://t.me/share/url?url=${encodeURIComponent(inviteLink)}&text=Join%20me%20on%20this%20awesome%20platform!`

        if (window.Telegram?.WebApp?.openTelegramLink) {
            window.Telegram.WebApp.openTelegramLink(url)
        } else {
            window.open(url, "_blank")
        }
    }

    return (
        <div className="flex w-full h-[38px] gap-2">
            <motion.div
                whileTap={{ scale: 0.8 }}
                className="bg-border w-[38px] h-[38px] rounded-[15px] p-[1px] cursor-pointer"
                onClick={handleCopy}
            >
                <div className="flex w-[38px] h-[38px] bg-gradient items-center justify-center rounded-[15px]">
                    <CopyIcon />
                </div>
            </motion.div>

            <motion.div
                whileTap={{ scale: 0.95 }}
                className="bg-border w-full p-[1px] rounded-[15px] cursor-pointer"
                onClick={handleInvite}
            >
                <div className="flex items-center justify-center gap-[5px] h-full bg-gradient w-full text-[16px] text-white font-bold rounded-[15px]">
                    {t('invitefriend')}
                    <TgLogo />
                </div>
            </motion.div>
        </div>
    )
}
