import {useTranslations} from "next-intl";

export const HeroMain= () => {
    const t = useTranslations('Home')
    return (
        <div className="flex items-center text-center flex-col text-[#666666] pb-[15px] text-[12px] gap-1 pt-[15px]">
            <h2 className="text-white text-[16px]">{t('blocks')}</h2>
            <p>{t('text')}</p>
        </div>
    )
}