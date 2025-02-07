import {ChevronLeft} from "lucide-react";

export default function TransactionPage() {
    return (
        <>
            <div className="flex z-[60] items-center flex-col text-[#666666] pb-[15px] text-[12px] gap-1 pt-[15px]">
                <div className="bg-top w-full p-[1px] rounded-[10px]">
                    <div
                        className="flex relative items-center justify-center w-full rounded-[10px] text-white text-[16px] font-bold bg-border h-[41px] px-[15px]">
                        <div className="absolute left-[15px]"><ChevronLeft width={20} height={20}/></div>
                        Управление балансом
                    </div>
                </div>
            </div>
        </>
    )
}
