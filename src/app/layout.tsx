import localFont from "next/font/local";
import {AppRoot} from "@telegram-apps/telegram-ui";
import Script from "next/script";
import {UserProvider} from "@/features/user/context/user-context";

const myFont = localFont({
    src: [
        {
            path: "./[locale]/fonts/SF-Pro-Display-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./[locale]/fonts/SF-Pro-Display-Semibold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./[locale]/fonts/SF-Pro-Display-Bold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./[locale]/fonts/SF-Pro-Display-Heavy.otf",
            weight: "800",
            style: "normal",
        },
    ],
})

export default function RootLayout({
                                       children,

                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${myFont.className} flex justify-center antialiased`}>
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive"/>
        <UserProvider>
            <AppRoot className="flex flex-col w-full max-w-[500px] h-[var(--tg-viewport-stable-height,100vh)]">
                {children}
            </AppRoot>
        </UserProvider>

        </body>
        </html>
    );
}