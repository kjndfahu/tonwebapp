import {TonBlack} from "@/shared/icons";
import {useTranslations} from "next-intl";

export const NFTBlock = () => {
    const t = useTranslations('Shop')
    return (
        <div className="flex w-full items-center bg-cover gap-[14px] bg-block-token rounded-[16px] h-[150px]">
            <div className="w-[166px] rounded-l-[16px] bg-white h-[150px]"></div>
            <div className="flex flex-col h-full pt-[20px] pb-[15px] text-[14px] font-bold text-white">
                <div className="flex flex-col">
                    {t('nft')}
                    <h2 className="text-[12px] font-medium leading-[14px]">{t('description')}<br/> {t('posted')}</h2>
                    <p className="text-[10px] pt-[8px] font-medium text-[#bfbfbf]">{t('additional')}</p>
                </div>
                <div className="flex mt-[8px] items-center justify-center text-black text-[14px] font-extrabold w-[169px] rounded-[10px] bg-[#ADADAD] gap-1 border-[2px] border-[#FEFEFE14] py-[5px]">
                    <TonBlack className="w-[17px] h-[17px]"/>
                    2
                </div>
            </div>
        </div>
    )
}