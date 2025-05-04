import type React from "react"
import type { Metadata } from "next"
import { Inter, VT323 } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
})

export const metadata: Metadata = {
  title: "Sean Blonien | Senior Software Engineer",
  description:
    "Portfolio of Sean Blonien, Senior Software Engineer specializing in full-stack development, React, React Native, and cloud architecture.",
  keywords: [
    "Sean Blonien",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Cloud Architecture",
  ],
  authors: [{ name: "Sean Blonien" }],
  creator: "Sean Blonien",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seanblonien.com",
    title: "Sean Blonien | Senior Software Engineer",
    description:
      "Portfolio of Sean Blonien, Senior Software Engineer specializing in full-stack development, React, React Native, and cloud architecture.",
    siteName: "Sean Blonien Portfolio",
    images: [
      {
        url: "/images/og-image.png", // This would need to be created
        width: 1200,
        height: 630,
        alt: "Sean Blonien Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sean Blonien | Senior Software Engineer",
    description:
      "Portfolio of Sean Blonien, Senior Software Engineer specializing in full-stack development, React, React Native, and cloud architecture.",
    images: ["/images/og-image.png"], // This would need to be created
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${vt323.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
