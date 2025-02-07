import {Block} from "@/shared/block";

export const ActiveBlocks = () => {
    return (
        <div className="flex flex-col flex-1 overflow-auto scrollbar-hide gap-[12px] px-[16px]">
            <h2 className="text-[18px] text-white font-extrabold">Активные блоки</h2>
            <div className="flex items-center gap-[9px] justify-between flex-wrap pb-[90px]">
                <Block/>
                <Block/>
            </div>
        </div>
    )
}