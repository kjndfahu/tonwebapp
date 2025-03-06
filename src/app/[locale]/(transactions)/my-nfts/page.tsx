import {unstable_setRequestLocale} from "next-intl/server";
import {MyNfts} from "@/features/user/ui/my-nfts";
import {MyNftBtn} from "@/features/user/ui/my-nft-btn";

type Params = {
    locale: 'en' | 'ru';
};

export default async function MyNftPage({ params }: { params: Promise<Params> }) {
    const { locale } = await params;
    unstable_setRequestLocale(locale);
    return (
        <div className="flex flex-col gap-[15px] h-[80vh] py-[15px] px-4">
            <MyNftBtn/>
            <MyNfts />
        </div>
    )
}
