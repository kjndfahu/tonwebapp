import {ArrowRight, TonIcon} from "@/shared/icons";
import { motion } from "framer-motion";
import {useTranslations} from "next-intl";

export const LotteryInfo = () => {
    const t = useTranslations('Lottery')
    return (
        <div className="flex flex-col justify-between w-full ">
            <div className="flex w-full justify-end gap-[5px] pr-[23px]">
                <div
                    className="flex z-[50] items-center justify-center text-[#cbcbcb] rounded-[10px] font-bold md:text-[14px] sm:text-[12px] text-[11px] w-full bg-days h-[30px]">
                    {t('start')} <span className="text-white">&nbsp;0:57</span>
                </div>
                <div
                    className="flex z-[50] items-center justify-center text-[#cbcbcb] rounded-[10px] font-bold md:text-[14px] sm:text-[12px] text-[11px] px-[8px] bg-days h-[30px]">
                    0/50
                </div>
            </div>
            <div className="flex flex-col gap-2 text-[#7a7a7a] text-[12px] items-center justify-center">
                <div className="flex items-center font-bold text-white text-[42px] gap-[10px]">
                    <TonIcon className="w-[45px] h-[45px]"/>
                    8
                </div>
                {t('prize')}
            </div>

            <motion.div whileTap={{scale: 0.95}} className="flex z-[70] items-center justify-center w-full bg-border h-[45px]  rounded-[12px] p-[1px]">
                <div className="flex items-center gap-2 font-bold md:text-[22px] text-[16px] text-white bg-gradient z-[71] rounded-[12px]">
                    {t('get')}
                    <ArrowRight/>
                    <div className="flex items-center gap-1">
                        <TonIcon className="md:w-[23px] w-[17px] md:h-[23px] h-[17px]"/>
                        1
                    </div>
                </div>
            </motion.div>
        </div>
    )
}