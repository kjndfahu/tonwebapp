import {UserContainer} from "@/features/user/container/user-container";
import {unstable_setRequestLocale} from "next-intl/server";

type Params = {
    locale: 'en' | 'ru';
};

export default async function UserPage({ params }: { params: Promise<Params> }) {
    const { locale } = await params;
    unstable_setRequestLocale(locale);
    return (
        <div className="flex-1 overflow-y-auto scrollbar-hide pb-[90px]">
            <UserContainer/>
        </div>
    )
}

