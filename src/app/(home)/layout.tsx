import type { Metadata } from "next";
import { Inter as FontSans, Inter } from "next/font/google";
import "../../styles/globals.css";
import { cn } from "@/lib/utils";
import { EdgeStoreProvider } from "@/lib/edgestore";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/elisa/theme-provider";
import ReactQueryClientProvider from "@/components/elisa/ReactQueryClientProvider";
import { Toaster } from "@/components/shadcn-ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "KT wiz | We Are Great Magic",
  description: "WINNING KT | We Are Great Magic",
  icons: {
    icon: "/ktwiz-bi-symbol.png",
  },
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
            <EdgeStoreProvider>
              <NavBar />
              <div className="h-screen pt-[110px]">{children}</div>
              <Toaster />
              {/* <MyChatbot /> */}
              {/* <Footer /> */}
            </EdgeStoreProvider>
          </ReactQueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
