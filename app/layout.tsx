import Footer from '@/components/footer';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer/>
        <Analytics />
      </body>
    </html>
  );
}