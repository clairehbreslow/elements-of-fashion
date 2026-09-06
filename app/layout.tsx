import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Elements of Fashion',
  description: 'An illustrated fashion collection inspired by the periodic table.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
