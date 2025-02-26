import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talty Digital LLC | Web Development & Software Engineering",
  description: "Full-service web development and software engineering agency helping businesses enhance their online presence.",
  keywords: "web development, software engineering, digital agency, website creation, social media planning, AI solutions",
};

// Footer column data
const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Website Creation", href: "/services/website-creation" },
      { label: "Social Media Planning", href: "/services/social-media" },
      { label: "Website Improvements", href: "/services/website-improvements" },
      { label: "AI Solutions", href: "/services/ai-solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Documentation", href: "/docs" },
      { label: "FAQs", href: "/faqs" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer columns={footerColumns} />
      </body>
    </html>
  );
}
