import Header from "@/components/header";
import Footer from "@/components/rightSidebar";
import './globals.css';

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
