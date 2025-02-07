import {NFTBlock} from "@/features/shop/ui/nft-block";

export const NFTList = () => {
    return (
        <div className="flex-1 overflow-auto scrollbar-hide">
            <div className="flex flex-col gap-[9px] px-4 pb-[90px]">
                <NFTBlock/>
                <NFTBlock/>
                <NFTBlock/>
            </div>
        </div>
    )
}