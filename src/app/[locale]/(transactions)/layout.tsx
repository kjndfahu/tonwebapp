import type React from "react";
import {AppRoot} from "@telegram-apps/telegram-ui";
import {Top} from "@/features/top/container/top";
import {locales} from "../../../../config";

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}


export default async function TransactionsLayout({
                                               children,
                                           }: {
    children: React.ReactNode;
}) {


    return (
            <AppRoot className="flex flex-col bg-transparent h-[var(--tg-viewport-stable-height,100vh)]">
                <Top />
                <main className="flex-1 overflow-y-auto scrollbar-hide overflow-x-hidden">
                    <div className="min-h-[80vh]">{children}</div>
                </main>
            </AppRoot>
    )
}