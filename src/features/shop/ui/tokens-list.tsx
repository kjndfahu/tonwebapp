import {TokenBlock} from "@/features/shop/ui/token-block";
import ProgressBlock from "@/features/shop/ui/progress-block";

export const TokensList = () => {
    return (
        <div className="flex-1 overflow-auto scrollbar-hide">
            <div className="flex flex-col gap-[9px] px-4 pb-[90px]">
                <ProgressBlock current={80000000} total={100000000}/>
                <TokenBlock/>
                <TokenBlock/>
                <TokenBlock/>
                <TokenBlock/>
            </div>
        </div>
    )
}