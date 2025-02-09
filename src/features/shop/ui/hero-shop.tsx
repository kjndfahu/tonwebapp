import {useTranslations} from "next-intl";

export const HeroShop= () => {
    const t = useTranslations('Shop')
    return (
        <div className="flex items-center text-center flex-col text-[#666666] pb-[15px] text-[12px] gap-1 pt-[15px]">
            <h2 className="text-white text-[16px]">{t('title')}</h2>
            <p>{t('text1')}<br/>{t('text2')} </p>
        </div>
    )
}