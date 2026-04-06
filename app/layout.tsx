import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'OXO TALKS | From DEX Liquidity to Settlement',
  description: 'Swap, redeem, and earn in one flow. Learn about the world\'s leading decentralized exchange mechanisms.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
