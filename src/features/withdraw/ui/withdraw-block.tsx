"use client"
import type React from "react"
import { TonIcon } from "@/shared/icons"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import {filterTonAddressInput} from "@/enteties/withdraw/address-validator";
import {filterMemoInput} from "@/enteties/withdraw/memo-validator";


export const WithdrawBlock = () => {
    const t = useTranslations("TopUp")

    const [address, setAddress] = useState("")
    const [memo, setMemo] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.blur()
    }

    useEffect(() => {
        const meta = document.createElement("meta")
        meta.name = "viewport"
        meta.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        document.getElementsByTagName("head")[0].appendChild(meta)

        return () => {
            document.getElementsByTagName("head")[0].removeChild(meta)
        }
    }, [])

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault()
            ;(e.target as HTMLInputElement).blur()
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[10px] w-full">
            <div className="flex items-center flex-col gap-[10px] text-white text-[16px] font-bold">
                {t("address2")}
                <div className="w-full rounded-[10px] bg-border p-[1px]">
                    <div className="flex w-full items-center justify-center h-[35px] bg-[#202020] rounded-[10px] text-[12px] font-semibold px-[20px] py-[5px]">
                        <input
                            placeholder="..."
                            className="w-full text-center bg-transparent text-white outline-0 touch-action-manipulation"
                            type="text"
                            inputMode="text"
                            enterKeyHint="done"
                            value={address}
                            onChange={(e) => {
                                const filteredValue = filterTonAddressInput(e.target.value)
                                setAddress(filteredValue)
                            }}
                            onBlur={handleInputBlur}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center flex-col gap-[10px] text-white text-[16px] font-bold">
                {t("amount")}
                <div className="w-full rounded-[10px] bg-border p-[1px]">
                    <div className="flex w-full items-center justify-center h-[35px] bg-[#202020] rounded-[10px] text-[12px] font-semibold px-[20px] py-[5px]">
                        <input
                            placeholder="0"
                            className="w-full bg-transparent text-white outline-0 touch-action-manipulation"
                            type="number"
                            inputMode="decimal"
                            pattern="[0-9]*"
                            enterKeyHint="done"
                            onBlur={handleInputBlur}
                            onKeyDown={handleKeyDown}
                        />
                        <TonIcon className="w-[14px] opacity-50 h-[14px]" />
                    </div>
                </div>
            </div>
            <div className="flex items-center flex-col gap-[10px] text-white text-[16px] font-bold">
                MEMO
                <div className="w-full rounded-[10px] bg-border p-[1px]">
                    <div className="flex w-full items-center justify-center h-[35px] bg-[#202020] rounded-[10px] text-[12px] font-semibold px-[20px] py-[5px]">
                        <input
                            placeholder="..."
                            className="w-full text-center bg-transparent text-white outline-0 touch-action-manipulation"
                            type="text"
                            inputMode="text"
                            enterKeyHint="done"
                            value={memo}
                            onChange={(e) => {
                                const filteredValue = filterMemoInput(e.target.value)
                                setMemo(filteredValue)
                            }}
                            onBlur={handleInputBlur}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}

