import {Earn} from "@/features/blocks/container/earn";
import {unstable_setRequestLocale} from "next-intl/server";
import {HeroMain} from "@/features/blocks/ui/hero-main";

type Params = {
    locale: 'en' | 'ru';
};

export default async function Home({ params }: { params: Promise<Params> }) {
    const { locale } = await params;
    unstable_setRequestLocale(locale);
    return (
        <>
            <HeroMain />
            <Earn/>
        </>
    )
}
