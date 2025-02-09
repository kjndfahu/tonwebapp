import {unstable_setRequestLocale} from "next-intl/server";
import {BalanceControl} from "@/features/topup/ui/balance-control";
import {WithdrawTerms} from "@/features/withdraw/ui/withdraw-terms";
import {WithdrawBlock} from "@/features/withdraw/ui/withdraw-block";
import AcceptBlock from "@/features/withdraw/ui/accept-block";

type Params = {
    locale: 'en' | 'ru';
};

export default async function WithdrawPage({ params }: { params: Promise<Params> }) {
    const { locale } = await params;
    unstable_setRequestLocale(locale);
    return (
        <div className="flex flex-col gap-[72px] h-[80vh] py-[15px] px-4">
            <div className="flex flex-col gap-4">
                <BalanceControl/>
                <WithdrawTerms/>
            </div>
            <WithdrawBlock/>
            <AcceptBlock/>
        </div>
    )
}