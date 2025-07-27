import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ChatbotWidget from '@/components/ChatbotWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ZapLead - AI & Automations That Convert',
  description: 'ZapLead builds AI chatbots and automation workflows that turn visitors into leads and leads into paying customers. Get started in 5 days or less.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ChatbotWidget />
      </body>
    </html>
  );
}
