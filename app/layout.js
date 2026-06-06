import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Insighto",
  description: "Collect customer feedback to build better products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={`${geist.className} scroll-smooth`} >
      <body className="h-full antialiased">
        {children}
        </body>
    </html>
  );
}
