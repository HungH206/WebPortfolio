// app/layout.tsx
import type { ReactNode } from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "../components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hung Hoang - Portfolio",
  description: "Personal portfolio of Hung Hoang, a junior at University of Houston",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex justify-center items-center min-h-screen bg-[#E1F6CD]">
        <main className="w-[1003px] h-[647px] bg-[#E1F6CD] shadow-md border rounded-lg overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}

