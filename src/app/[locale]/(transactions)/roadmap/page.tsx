import {unstable_setRequestLocale} from "next-intl/server";
import {RoadmapBlock} from "@/features/user/ui/roadmap-block";
import {RoadmapBtn} from "@/features/user/ui/roadmap-btn";

type Params = {
    locale: 'en' | 'ru';
};

export default async function RoadmapPage({ params }: { params: Promise<Params> }) {
    const { locale } = await params;
    unstable_setRequestLocale(locale);
    return (
        <div className="flex flex-col gap-[15px] h-[80vh] py-[15px] px-4">
            <RoadmapBtn/>
            <RoadmapBlock />
        </div>
    )
}
