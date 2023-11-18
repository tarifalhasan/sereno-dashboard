import Sidebar from "@/components/sidebar/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Poppins as FontSans } from "next/font/google";
import { ReactNode } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className
        )}
      >
        <div className={cn("flex items-start ")}>
          <Sidebar />
          <main
            className={cn(
              "flex-1 w-full relative overflow-hidden  py-5 lg:py-8 lg:ml-[233px] px-2 sm:px-4 lg:px-10"
            )}
          >
            {children}
          </main>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
