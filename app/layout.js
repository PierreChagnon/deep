import Navbar from "./components/Navbar";
import { Analytics } from '@vercel/analytics/react';
import { inter } from "./fonts";
import "./globals.css";


export const metadata = {
  title: "Deep",
  description: "Deep is a project that aims to help you understand your personality and habits through a series of questions based on gaming preferences.",
  openGraph: {
    title: 'Deep',
    description: 'Deep is a project that aims to help you understand your personality and habits through a series of questions based on gaming preferences.',
    url: 'https://www.the-deepmodel.fr/',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'thumbail',
      },
    ],
  },
};

// other possible bg colors: from-[#101419] to-[#101419e4]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-dvh from-[#010018] to-[#262449] bg-gradient-to-b`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
