import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Noto_Sans_Tamil, Sora } from "next/font/google";
import "@/app/globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CustomCursor from "@/components/layout/CustomCursor";
import PageTransition from "@/components/layout/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: "--font-tamil",
  weight: ["400", "600", "700"],
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KR Arts And Science College | Madurai Kamaraj University Affiliated",
  description:
    "Official website of KR Arts And Science College, Peraiyur, Madurai. Affiliated to Madurai Kamaraj University, Est. 2023. Empowering rural minds with modern education and 100% placement achievement.",
  icons: {
    icon: "/assets/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${notoSansTamil.variable} ${sora.variable}`}
    >
      <body>
        <SmoothScrollProvider>
          <ScrollProgress />
          <CustomCursor />
          <PageTransition />
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
