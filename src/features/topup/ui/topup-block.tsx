import {CopyIcon} from "@/shared/icons";

export const TopUpBlock = () => {
    return (
        <div className="flex flex-col gap-[10px] w-full">
            <div className="flex items-center flex-col gap-[10px] text-white text-[16px] font-bold">
                Адресс пополнения
                <div className="flex w-full items-center justify-center h-[35px] bg-[#6b6b6b] rounded-[10px] text-[12px] font-semibold px-[20px] py-[5px]">
                    UQCxteY100D8OJEsjeYmplxgYAwgGE9RQyKnx9QyZBsu...
                </div>
            </div>
            <div className="flex items-center flex-col gap-[10px] text-white text-[16px] font-bold">
                MEMO
                <div className="flex w-full h-[35px] relative items-center justify-center bg-[#6b6b6b] rounded-[10px] text-[12px] font-semibold px-[10px] py-[5px]">
                    <div className="absolute left-[10px]">
                        <CopyIcon className="w-[13px] h-[13px]" />
                    </div>
                    DJEOTYBANWOLBGR
                </div>
            </div>
        </div>
    )
}