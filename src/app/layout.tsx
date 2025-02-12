import localFont from "next/font/local";

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
        <body className={`${myFont.className} w-full antialiased`}>
        {children}
        </body>
        </html>
    );
}