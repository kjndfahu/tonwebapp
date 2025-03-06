import type React from "react";
import {Top} from "@/features/top/container/top";
import {locales} from "../../../../config";
import {Toaster} from "react-hot-toast";

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}


export default async function TransactionsLayout({
                                               children,
                                           }: {
    children: React.ReactNode;
}) {


    return (
            <>
                <Top isScrolled={false}/>
                <main className="flex-1 pt-[130px] overflow-y-auto scrollbar-hide overflow-x-hidden">
                    <div className="min-h-[80vh]">{children}</div>
                </main>
                <Toaster />
            </>
    )
}