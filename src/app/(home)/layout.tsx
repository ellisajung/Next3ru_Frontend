import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../../styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/elisa/theme-provider";
import ReactQueryClientProvider from "@/components/elisa/ReactQueryClientProvider";
import { Toaster } from "@/components/shadcn-ui/toaster";
import NavBar from "@/components/NavBar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "KT wiz | We Are Great Magic",
  description: "WINNING KT | We Are Great Magic",
  // icons: {
  //   icon: "/icon.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryClientProvider>
            <main className="flex flex-col min-h-screen">
              <NavBar />
              <div className="flex-1">
                {/* <div className="absolute w-full h-full hidden space-y-6 p-24 pb-30 md:block"> */}
                {/* <div className="absolute w-full h-full px-4 max-sm:py-1 sm:p-10 md:p-14 lg:p-20 xl:p-24 md:block"> */}
                {children}
                {/* </div> */}
              </div>
            </main>
            <Toaster />
            {/* <MyChatbot /> */}
            {/* <Footer /> */}
          </ReactQueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
