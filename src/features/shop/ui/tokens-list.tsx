import {TokenBlock} from "@/features/shop/ui/token-block";

export const TokensList = () => {
    return (
        <div className="flex-1 overflow-auto scrollbar-hide">
            <div className="flex flex-col gap-[9px] px-4 pb-[90px]">
                <TokenBlock/>
                <TokenBlock/>
                <TokenBlock/>
                <TokenBlock/>
            </div>
        </div>
    )
}