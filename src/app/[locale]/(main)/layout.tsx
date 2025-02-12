import type React from "react"
import { AppRoot } from "@telegram-apps/telegram-ui"
import { locales } from "../../../../config"
import { TabbarNavbar } from "@/features/main/container/tabbar"
import { ScrollHandlerWrapper } from "@/features/scroll-handler"
import {unstable_setRequestLocale} from "next-intl/server";

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }))
}

type Params = {
    locale: 'en' | 'ukr';
};

export default async function MainLayout({
                                       children,
    params
                                   }: {
    children: React.ReactNode,
    params: Promise<Params>
}) {
    const { locale } = await params;
    unstable_setRequestLocale(locale);
    return (
        <AppRoot className="flex flex-col bg-transparent h-[var(--tg-viewport-stable-height,100vh)]">
            <ScrollHandlerWrapper>
                <main className="flex-1 overflow-y-auto scrollbar-hide overflow-x-hidden">
                    <div className="min-h-[var(--tg-viewport-stable-height,100vh)]">{children}</div>
                </main>
            </ScrollHandlerWrapper>
            <TabbarNavbar/>
        </AppRoot>
    )
}

