'use client'
import { TabbarItem } from "@telegram-apps/telegram-ui/dist/components/Layout/Tabbar/components/TabbarItem/TabbarItem";
import { Tabbar } from "@telegram-apps/telegram-ui";
import { EarnsIcon, EventsIcon, ShopIcon, UserIcon } from "@/shared/icons";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const TabbarNavbar = () => {
    const pathname = usePathname();
    const [isButtonVisible, setIsButtonVisible] = useState<string>("");

    useEffect(() => {
        if (pathname.includes("/shop")) setIsButtonVisible("shop");
        else if (pathname.includes("/events")) setIsButtonVisible("event");
        else if (pathname.includes("/user")) setIsButtonVisible("user");
        else setIsButtonVisible("earns");
    }, [pathname]);

    return (
        <div className=" w-full max-w-[500px] z-[50] fixed bottom-[-2px] bg-border p-[1px] rounded-t-[15px]">
            <Tabbar className="flex bg-black/65 backdrop-blur-[25px] rounded-t-[15px] font-bold leading-[25px] text-[14px] items-center justify-between w-full sm:px-[48px] px-[24px] pt-[15px] pb-[24px]">

                <Link href="/">
                    <TabbarItem onClick={() => setIsButtonVisible("earns")}
                                className="flex justify-center flex-col items-center">
                        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop
                                        offset="0%"
                                        stopColor={isButtonVisible === 'earns' ? 'rgba(255, 255, 255, 0.77) ' : 'rgba(255, 255, 255, 0.47)'}
                                    />
                                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0)"/>
                                </linearGradient>
                            </defs>
                            <EarnsIcon className="url(#gradient1)"/>
                        </svg>
                        <span
                            className={`text-transparent bg-clip-text ${isButtonVisible === "earns" ? "bg-gradient-to-r from-white to-transparent" : "bg-gradient-to-r from-gray-500 to-transparent"}`}>
                            EARNS
                        </span>
                    </TabbarItem>
                </Link>

                <Link href="/shop">
                    <TabbarItem onClick={() => setIsButtonVisible("shop")}
                                className="flex justify-center flex-col items-center">
                        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop
                                        offset="0%"
                                        stopColor={isButtonVisible === 'shop' ? 'rgba(255, 255, 255, 0.77) ' : 'rgba(255, 255, 255, 0.47)'}
                                    />
                                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0)"/>
                                </linearGradient>
                            </defs>
                            <ShopIcon className="url(#gradient2)"/>
                        </svg>
                        <span
                            className={`text-transparent bg-clip-text ${isButtonVisible === "shop" ? "bg-gradient-to-r from-white to-transparent" : "bg-gradient-to-r from-gray-500 to-transparent"}`}>
                            SHOP
                        </span>
                    </TabbarItem>
                </Link>

                <Link href="/events">
                    <TabbarItem onClick={() => setIsButtonVisible("event")}
                                className="flex justify-center flex-col items-center">
                        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop
                                        offset="0%"
                                        stopColor={isButtonVisible === 'event' ? 'rgba(255, 255, 255, 0.77) ' : 'rgba(255, 255, 255, 0.47)'}
                                    />
                                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0)"/>
                                </linearGradient>
                            </defs>
                            <EventsIcon className="url(#gradient3)"/>
                        </svg>
                        <span
                            className={`text-transparent bg-clip-text ${isButtonVisible === "event" ? "bg-gradient-to-r from-white to-transparent" : "bg-gradient-to-r from-gray-500 to-transparent"}`}>
                            EVENT
                        </span>
                    </TabbarItem>
                </Link>

                <Link href="/user">
                    <TabbarItem onClick={() => setIsButtonVisible("user")}
                                className="flex justify-center flex-col items-center">
                        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop
                                        offset="0%"
                                        stopColor={isButtonVisible === 'user' ? 'rgba(255, 255, 255, 0.77) ' : 'rgba(255, 255, 255, 0.47)'}
                                    />
                                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0)"/>
                                </linearGradient>
                            </defs>
                            <UserIcon className="url(#gradient4)"/>
                        </svg>
                        <span
                            className={`text-transparent bg-clip-text ${isButtonVisible === "user" ? "bg-gradient-to-r from-white to-transparent" : "bg-gradient-to-r from-gray-500 to-transparent"}`}>
                            USER
                        </span>
                    </TabbarItem>
                </Link>

            </Tabbar>
        </div>
    );
};
