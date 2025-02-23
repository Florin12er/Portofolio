// app/layout.tsx
import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientThemeProvider from "@/components/ClientThemeProvider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio",
    description: "This is my portfolio site",
    icons: {
        icon: "/images/portfolio.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ClientThemeProvider>{children}</ClientThemeProvider>
                <Toaster
                    position="bottom-right"
                    expand={false}
                    toastOptions={{
                        unstyled: true,
                        classNames: {
                            toast:
                                "group toast group flex w-full items-center border-l-4 border-blue-600 bg-white p-4 shadow-lg dark:bg-gray-700",
                            title: "text-sm font-semibold text-gray-900 dark:text-white",
                            description:
                                "mt-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400",
                            actionButton:
                                "group-[.toast]:bg-blue-500 group-[.toast]:text-white",
                            cancelButton:
                                "group-[.toast]:bg-gray-100 group-[.toast]:text-gray-800 dark:group-[.toast]:bg-gray-700 dark:group-[.toast]:text-white",
                            closeButton:
                                "absolute right-2 top-2 p-1 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white",
                        },
                    }}
                />
            </body>
        </html>
    );
}
