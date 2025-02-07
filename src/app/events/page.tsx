'use client'

import {useState} from "react";
import {EventsTypes} from "@/features/events/ui/events-types";
import {Earns} from "@/features/user/container/earns";
import {Tasks} from "@/features/tasks/container/tasks";

interface Events {
    id: string
    label: string
}

const events: Events[] = [
    {id: "minigames", label: "Мини игры"},
    {id: "tasks", label: "Задания"},
]

export default function EventsPage() {
    const [activeTab, setActiveTab] = useState(events[0].id)
    return (
        <>
            <EventsTypes activeTab={activeTab} setActiveTab={setActiveTab} events={events} />
            {activeTab === events[0].id ? (
                <Earns/>
            ) : (
                <Tasks/>
            )}
        </>
    )
}
