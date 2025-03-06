import {WarningIcon} from "@/shared/icons";
import type React from "react";
import {useTranslations} from "next-intl";

export const WithdrawTerms = () => {
    const t = useTranslations("TopUp")

    return (
        <div className="bg-[#15130B] rounded-[15px] backdrop-blur-2xl p-4">
            <div className="flex items-start gap-[20px]">
                <WarningIcon className="w-[30px] mt-[10px] h-[30px] min-w-[30px] min-h-[30px]"/>
                <div className="flex flex-col">
                    <div className="text-yellow-500 text-[14px] font-bold">{t('rules')}</div>
                    <div className="text-[12px] leading-[16px] font-medium text-yellow-500">
                        {t('with')}
                    </div>
                </div>
            </div>
        </div>
    )
}