import {WarningIcon} from "@/shared/icons";
import type React from "react";

export const WithdrawTerms = () => {
    return (
        <div className="bg-[#15130B] rounded-[15px] backdrop-blur-2xl p-4">
            <div className="flex items-start gap-[20px]">
                <WarningIcon className="w-[30px] pt-[10px] h-[30px]"/>
                <div className="flex flex-col">
                    <div className="text-yellow-500 font-bold">Условия вывода</div>
                    <div className="text-sm font-medium text-yellow-500">
                        Вывод доступен только на TON-адрес. Перевод на другие аккаунты невозможен.
                    </div>
                </div>
            </div>
        </div>
    )
}