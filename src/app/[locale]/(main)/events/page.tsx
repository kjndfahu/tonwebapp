"use client";

import { useState } from "react";
import { EventsTypes } from "@/features/events/ui/events-types";
import { Earns } from "@/features/user/container/earns";
import { Tasks } from "@/features/tasks/container/tasks";
import { usePathname } from "next/navigation";

export default function EventsPage() {
    const pathname = usePathname();
    const isEnglish = pathname.startsWith("/en");

    const events = [
        { id: "minigames", label: isEnglish ? "Mini Games" : "Мини игры" },
        { id: "tasks", label: isEnglish ? "Tasks" : "Задания" },
    ];

    const [activeTab, setActiveTab] = useState(events[0].id);

    return (
        <>
            <EventsTypes activeTab={activeTab} setActiveTab={setActiveTab} events={events} />
            {activeTab === "minigames" ? <Earns /> : <Tasks />}
        </>
    );
}
