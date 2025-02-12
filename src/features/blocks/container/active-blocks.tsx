import {useTranslations} from "next-intl";
import {ActiveBlock} from "@/features/blocks/ui/active-block";

export const ActiveBlocks = () => {
    const t = useTranslations('Blocks')
    return (
        <div className="flex flex-col flex-1 overflow-auto scrollbar-hide gap-[12px] md:px-[16px] px-2">
            <h2 className="text-[18px] text-white font-extrabold">{t('active')}</h2>
            <div className="flex items-center md:gap-[9px] gap-[5px] justify-between flex-wrap pb-[90px]">
                <ActiveBlock/>
                <ActiveBlock/>
            </div>
        </div>
    )
}