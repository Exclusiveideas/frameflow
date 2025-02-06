import { Geist, Geist_Mono, Poppins, Blinker } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

// If loading a variable font, you don't need to specify the font weight
const blinker = Blinker({
  weight: ["100", "200", "300", "400", "600", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FrameFlow",
  description: "An Editor's Co-Pilot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* <script src="https://getlaunchlist.com/js/widget.js" defer></script> */}
        <link
          rel="stylesheet"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />
      </Head>
        <Script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js" 
        strategy="afterInteractive"></Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${blinker.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
