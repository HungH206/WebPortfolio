import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "@/components/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hung Hoang - Portfolio",
  description: "Personal portfolio of Hung Hoang, a junior at University of Houston",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 bg-[#dff0d0] overflow-auto">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

