import {Block} from "@/shared/block";

export const AllBlocks = () => {
    return (
        <div className="flex-1 overflow-auto scrollbar-hide">
            <div className="flex items-center md:gap-[9px] gap-[5px] justify-between flex-wrap md:px-4 px-2 pb-[90px]">
                <Block/>
                <Block/>
                <Block/>
                <Block/>
                <Block/>
                <Block/>
                <Block/>
                <Block/>
            </div>
        </div>
    )
}