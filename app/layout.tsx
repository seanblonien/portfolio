import type React from "react"
import type { Metadata } from "next"
import { Inter, VT323 } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import AudioPlayer from "@/components/audio-player"

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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ]
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://seanblonien.com"),
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
        url: "/android-chrome-512x512.png", // Using the favicon as OG image for now
        width: 512,
        height: 512,
        alt: "Sean Blonien Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Sean Blonien | Senior Software Engineer",
    description:
      "Portfolio of Sean Blonien, Senior Software Engineer specializing in full-stack development, React, React Native, and cloud architecture.",
    images: ["/android-chrome-512x512.png"], // Using the favicon as Twitter image for now
  },
  robots: {
    index: true,
    follow: true,
  },
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
          <AudioPlayer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
