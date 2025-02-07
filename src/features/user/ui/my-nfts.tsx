import {MyNftBlock} from "@/features/user/ui/my-nft-block";

export const MyNfts = () => {
    return (
        <div className="flex-1 overflow-auto scrollbar-hide">
            <div className="flex text-left flex-col gap-[9px] ">
                <MyNftBlock/>
                <MyNftBlock/>
                <MyNftBlock/>
            </div>
        </div>
    )
}