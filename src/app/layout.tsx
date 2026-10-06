import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "K.R. College of Arts & Science | Empowering Minds. Building Futures.",
  description: "Official website of K.R. College of Arts & Science (Affiliated to Manonmaniam Sundaranar University, Kovilpatti). Offering undergraduate, postgraduate, and skill development programs.",
  keywords: ["KR College of Arts and Science", "Kovilpatti College", "Arts and Science College Tamil Nadu", "Manonmaniam Sundaranar University", "Higher Education Kovilpatti"],
  icons: {
    icon: "/kr-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${outfit.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="font-sans bg-[#FFFFFF] text-[#234052] antialiased min-h-screen selection:bg-[#38A9E8] selection:text-white">
        {children}
      </body>
    </html>
  );
}


