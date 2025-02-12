import {WinnersBlock} from "@/features/events/ui/winners-block";
import {useTranslations} from "next-intl";

export const PastWinners = () => {
    const t = useTranslations('Lottery')
    return (
        <div className="flex flex-col items-center text-center gap-[7px] text-white text-[11px] leading-[13px] font-bold">
            {t('winners')}
            <div className="flex flex-col gap-[6px]">
                <WinnersBlock/>
                <WinnersBlock/>
                <WinnersBlock/>
                <WinnersBlock/>
                <WinnersBlock/>
                <WinnersBlock/>
                <WinnersBlock/>
                <WinnersBlock/>
                <WinnersBlock/>
            </div>
        </div>
    )
}