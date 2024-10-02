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
    <html lang="en" className={`${open_sans.variable}  ${lora.variable}`} >
       <head>
        <meta charSet="UTF-8" />
        <meta name="description" content={"Your Trusted Partner in Comprehensive Care and Quality Services"} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:title" content={"Home"} />
        <meta property="og:description" content={"Your Trusted Partner in Comprehensive Care and Quality Services"} />
        <meta name="robots" content="index, follow" />
        <title>Home - nurakeems</title>
      </head>
      <body>
          <Header />
            <main id="top">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
