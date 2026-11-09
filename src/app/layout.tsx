import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/query-provider";
import { Toaster } from "sonner";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin", "vietnamese"],
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
    title: {
        default: "Pine Ecommerce",
        template: "%s | Pine Ecommerce - Modern Ecommerce Website",
    },
    description:
        "Pine Ecommerce - Modern Ecommerce Website with security and performance in mind.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="vi"
            suppressHydrationWarning
            className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <QueryProvider>
                    {children}
                    <Toaster richColors position="bottom-right" />
                </QueryProvider>
            </body>
        </html>
    );
}
