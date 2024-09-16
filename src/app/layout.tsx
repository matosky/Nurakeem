import { Lora, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-lora',
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-open-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${open_sans.variable} ${lora.variable}`} >
      <body>
          <Header />
            <div id="top">{children}</div>
          <Footer />
      </body>
    </html>
  );
}
