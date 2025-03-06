import {Shop} from "@/features/shop/container/shop";
import {unstable_setRequestLocale} from "next-intl/server";
import {HeroShop} from "@/features/shop/ui/hero-shop";

type Params = {
    locale: 'en' | 'ru';
};

export default async function ShopPage({ params }: { params: Promise<Params> }) {
    const { locale } = await params;
    unstable_setRequestLocale(locale);
    return (
        <div className="w-full">
            <HeroShop/>
            <Shop/>
        </div>
    )
}
