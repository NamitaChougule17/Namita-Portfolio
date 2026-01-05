import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Namita Chougule Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-[#FAF9F6] text-[#1A1A1A] relative pt-28 sm:pt-36 dark:bg-[#0A0E1A] dark:text-[#E8E8EA] overflow-x-hidden`}
      >
        <div className="bg-gradient-to-r from-[#FF6B6B]/30 via-[#FF8E53]/25 to-[#FFA07A]/30 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:from-[#FF6B6B]/20 dark:via-[#FF8E53]/15 dark:to-[#FFA07A]/20"></div>
        <div className="bg-gradient-to-r from-[#4ECDC4]/30 via-[#44A08D]/25 to-[#0F4C75]/30 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:from-[#4ECDC4]/15 dark:via-[#44A08D]/12 dark:to-[#0F4C75]/15"></div>
        <div className="bg-gradient-to-r from-[#667EEA]/25 via-[#764BA2]/20 to-[#F093FB]/25 absolute bottom-[-10rem] -z-10 right-[-20rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:from-[#667EEA]/12 dark:via-[#764BA2]/10 dark:to-[#F093FB]/12"></div>

        <ThemeProvider> 
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
