import {Block} from "@/shared/block";

export const AllBlocks = () => {
    return (
        <div className="flex-1 overflow-auto scrollbar-hide">
            <div className="flex w-full items-center justify-center gap-3 flex-wrap md:px-4 px-2 pb-[90px]">
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