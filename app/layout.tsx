import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Webinar OXO Talks: Web3 Wealth Mastery",
  description: "Jangan Cuma HODL! Pelajari strategi trading cerdas di DEX (Decentralized Exchange) bersama pakar DeFi. Daftar GRATIS sekarang.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Webinar OXO Talks: Web3 Wealth Mastery",
    description: "Bongkar rahasia trading di DEX tanpa ribet. Aman, transparan, dan profitable. Gabung komunitas eksklusif sekarang!",
    url: "https://oxo5.vercel.app/",
    siteName: "OXO Talks",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webinar OXO Talks: Web3 Wealth Mastery",
    description: "Jangan Cuma HODL! Pelajari strategi trading cerdas di DEX bersama pakar DeFi.",
    creator: "@oxotalks",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* Default Meta Pixel Code */}
      </head>
      <body
        className={`${jakarta.variable} antialiased bg-[#020617] text-slate-50`}
      >
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            
            fbq('init', 'YOUR_PIXEL_ID_HERE'); 
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID_HERE&ev=PageView&noscript=1" />
        </noscript>
        {children}
      </body>
    </html>
  );
}
