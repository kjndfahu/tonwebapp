
import {ReferralsIcon, TonIcon} from "@/shared/icons";
import {useState} from "react";
import {ModalStatistics} from "@/features/user/ui/modal-statistics";
import {useTranslations} from "next-intl";
import { motion } from "framer-motion";

export const Referrals = () => {
    const t = useTranslations('User')
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex w-full items-center gap-3 justify-between">
            <div
                className="flex flex-col w-full rounded-[18px] sm:gap-[5px] items-center justify-between sm:h-full h-[133px] text-white text-[14px] font-bold bg-cover bg-block py-[16px] px-[15px]">
                <h2>{t('earn')}</h2>
                <h2 className="text-[32px] font-bold leading-[38px] text-[#B4F36F]">20%</h2>
                <p className="text-[14px] font-medium leading-[16px] text-[#8b8b8b]">{t('friends')} <span className="text-white">TON</span></p>
            </div>
            <div
                className="flex flex-col w-full bg-cover gap-[9px] rounded-[18px] items-center justify-center text-white leading-[18px] text-[14px] font-bold bg-block pt-[15px] pb-[11px] px-[15px]">
                <h2>{t('earned')}</h2>
                <div className="flex items-center leading-[46px] text-[42px] text-white font-extrabold gap-[10px]">
                    <TonIcon className="w-[45px] h-[45px]" />
                    50
                </div>
                <div className="bg-border cursor-pointer rounded-full p-[1px]">
                    <motion.div whileTap={{scale: 0.95}} onClick={() => setIsOpen(true)} className="flex backdrop-blur-lg items-center justify-center gap-[5px] bg-gradient rounded-full h-[23px] text-[10px] text-[#fafafa] font-medium w-[111px]">
                        {t('invited')}
                        <div className="flex items-center gap-[2px] text-white">
                            11
                            <ReferralsIcon/>
                        </div>
                    </motion.div>
                </div>
            </div>
            {isOpen && ( <ModalStatistics isOpen={isOpen} setIsOpen={setIsOpen} /> )}
        </div>
    )
}