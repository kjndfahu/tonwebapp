import {unstable_setRequestLocale} from "next-intl/server";
import {BalanceControl} from "@/features/topup/ui/balance-control";
import {WarningTon} from "@/features/topup/ui/warning-ton";
import {HowToPay} from "@/features/topup/ui/how-to-pay";
import {TopUpBlock} from "@/features/topup/ui/topup-block";
import TimerPage from "@/features/topup/ui/footer-transactions";

type Params = {
    locale: 'en' | 'ru';
};

export default async function TopUpPage({ params }: { params: Promise<Params> }) {
    const { locale } = await params;
    unstable_setRequestLocale(locale);
    return (
        <div className="flex flex-col gap-[72px] h-[80vh] py-[15px] px-4">
            <div className="flex flex-col gap-4">
                <BalanceControl/>
                <WarningTon/>
                <HowToPay/>
            </div>
            <TopUpBlock/>
            <TimerPage/>
        </div>
    )
}