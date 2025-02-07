import {Block} from "@/shared/block";

export const AllBlocks = () => {
    return (
        <div className="flex-1 overflow-auto scrollbar-hide">
            <div className="flex items-center gap-[9px] justify-between flex-wrap px-[16px] pb-[90px]">
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