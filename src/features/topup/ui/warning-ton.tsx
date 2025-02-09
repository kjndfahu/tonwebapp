import {WarningIcon} from "@/shared/icons";
import type React from "react";

export const WarningTon = () => {
    return (
        <div className="bg-[#15130B] rounded-[15px] backdrop-blur-2xl p-4">
            <div className="flex items-start gap-3">
                <WarningIcon className="w-[30px] pt-[10px] h-[30px]"/>
                <div className="flex flex-col">
                    <div className="text-yellow-500 font-bold">Отправляйте только TON на этот адрес</div>
                    <div className="text-sm font-medium text-yellow-500">
                        Другие активы будут безвозвратно <br/> утрачены
                    </div>
                </div>
            </div>
        </div>
    )
}