import {TonBlack} from "@/shared/icons";

export const TokenBlock = () => {
    return (
        <div className="flex w-full items-center bg-cover gap-[12px] bg-block-token p-[12px] rounded-[16px] h-[150px]">
            <div className="w-[152px] bg-white h-[123px]"></div>
            <div className="flex flex-col justify-between h-full text-[14px] font-bold text-white">
                <div className="flex pt-[5px] flex-col">
                    BLOCK
                    <h2 className="text-[42px] leading-[42px]">1.250</h2>
                    <p className="text-[10px] font-medium text-[#7c7c7c]"> <span className="text-[#B4F36F]">+36% </span> к доходности</p>
                </div>
                <div className="flex items-center justify-center text-black text-[14px] font-extrabold w-[169px] rounded-[10px] bg-[#ADADAD] gap-1 border-[2px] border-[#FEFEFE14] py-[5px]">
                    <TonBlack className="w-[17px] h-[17px]"/>
                    2
                </div>
            </div>
        </div>
    )
}