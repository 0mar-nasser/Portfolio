import { Outfit, Plus_Jakarta_Sans, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

import SmoothScroll from "@/components/SmoothScroll";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });

export const metadata = {
  title: "Dev Omar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("dark", geist.variable, outfit.variable, plusJakarta.variable)}>
      <body className="font-outfit antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}