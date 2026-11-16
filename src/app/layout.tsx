import type { Metadata } from "next";
import "@/app/globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import CustomCursor from "@/components/layout/CustomCursor";
import FloatingCounsellor from "@/components/layout/FloatingCounsellor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://krcollege.edu.in"),
  title: "KR Arts And Science College | Madurai Kamaraj University Affiliated",
  description:
    "Official website of KR Arts And Science College, Peraiyur, Madurai. Affiliated to Madurai Kamaraj University, Est. 2023. Empowering rural minds with modern education and 100% placement achievement.",
  icons: {
    icon: [
      { url: "/kr-logo-official.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/kr-logo-official.png",
    apple: "/kr-logo-official.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-clip max-w-full">
      <head>
        <link rel="icon" href="/kr-logo-official.png" type="image/png" />
        <link rel="shortcut icon" href="/kr-logo-official.png" type="image/png" />
        <link rel="apple-touch-icon" href="/kr-logo-official.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Montserrat:wght@800;900&family=Noto+Sans+Tamil:wght@400;600;700;800;900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Sora:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white text-black overflow-x-clip max-w-full relative">
        <CustomCursor />
        <FloatingCounsellor />
        <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
