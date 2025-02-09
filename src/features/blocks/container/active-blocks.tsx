import {Block} from "@/shared/block";

export const ActiveBlocks = () => {
    return (
        <div className="flex flex-col flex-1 overflow-auto scrollbar-hide gap-[12px] md:px-[16px] px-2">
            <h2 className="text-[18px] text-white font-extrabold">Активные блоки</h2>
            <div className="flex items-center md:gap-[9px] gap-[5px] justify-between flex-wrap pb-[90px]">
                <Block/>
                <Block/>
            </div>
        </div>
    )
}