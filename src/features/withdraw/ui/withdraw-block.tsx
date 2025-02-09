import {CopyIcon} from "@/shared/icons";

export const WithdrawBlock = () => {
    return (
        <div className="flex flex-col gap-[10px] w-full">
            <div className="flex items-center flex-col gap-[10px] text-white text-[16px] font-bold">
                Адресс вывода
                <div className="w-full rounded-[10px] bg-border p-[1px]">
                    <div
                        className="flex w-full items-center justify-center h-[35px] bg-[#202020] rounded-[10px] text-[12px] font-semibold px-[20px] py-[5px]">
                        ....
                    </div>
                </div>
            </div>
            <div className="flex items-center flex-col gap-[10px] text-white text-[16px] font-bold">
                Сумма вывода
                <div className="w-full rounded-[10px] bg-border p-[1px]">
                    <div
                        className="flex w-full items-center justify-center h-[35px] bg-[#202020] rounded-[10px] text-[12px] font-semibold px-[20px] py-[5px]">
                       0
                    </div>
                </div>
            </div>
            <div className="flex items-center flex-col gap-[10px] text-white text-[16px] font-bold">
                MEMO
                <div className="w-full rounded-[10px] bg-border p-[1px]">
                    <div
                        className="flex w-full items-center justify-center h-[35px] bg-[#202020] rounded-[10px] text-[12px] font-semibold px-[20px] py-[5px]">
                        ....
                    </div>
                </div>
            </div>
        </div>
    )
}