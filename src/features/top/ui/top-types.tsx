import { ArrowDown, ArrowUp } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"

export const TopTypes = ({isScrolled}:{isScrolled:boolean}) => {
    const t = useTranslations("Top")

    return (
        <div className="w-full z-[10] px-[30px]">
            <div className={`w-full z-[10] ${isScrolled ? ('') : ('bg-border')}  p-[1px] rounded-b-[15px]`}>
                <div className={` text-white w-full ${isScrolled ? ('hidden') : ('flex')} rounded-b-[15px] bg-gradient`}>
                    <Link className="w-full" href="/topup">
                        <div className="flex z-[10] items-center text-[12px] font-medium gap-1 border-r-[2px] border-r-[#a0a0a0] justify-center rounded-bl-[15px] w-full h-[30px]">
                            <ArrowUp width={15} height={15} />
                            {t("topup")}
                        </div>
                    </Link>
                    <Link className="w-full" href="/withdraw">
                        <div className="flex z-[10] items-center text-[12px] font-medium gap-1 justify-center rounded-br-[15px] w-full h-[30px]">
                            <ArrowDown width={15} height={15} />
                            {t("withdraw")}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

