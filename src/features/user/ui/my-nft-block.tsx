import {useTranslations} from "next-intl";
import nft from '../../../../public/img/nft.png'
import Image from "next/image";

export const MyNftBlock = () => {
    const t = useTranslations('Shop')

    return (
        <>
            <div className="flex w-full items-center bg-cover gap-[10px] bg-block-token rounded-[16px] h-[150px]">
                <Image alt="/" src={nft} className="w-[166px] rounded-l-[16px] h-[150px]"/>
                <div
                    className="flex flex-col items-center justify-center h-full pt-[20px] pb-[15px] px-2 md:text-[14px] text-[12px] font-bold text-white">
                    <div className="flex flex-col gap-[2px]">
                        {t('nft')}
                        <h2 className="md:text-[12px] text-[10px] font-medium md:leading-[14px] leading-3">{t('description')}<br/> {t('posted')}
                        </h2>
                        <p className="text-[10px] pt-[8px] font-medium text-[#bfbfbf]">{t('additional')}</p>
                    </div>
                </div>
            </div>
        </>
    )
}