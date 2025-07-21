"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Folder, Briefcase, Award, MessageSquare } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "bg-green-200/50 text-green-800" : "text-gray-600 hover:text-green-600"
  }

  return (
    <div className="w-full md:w-24 h-16 md:h-auto bg-[#f5e9c9] flex flex-row md:flex-col items-center justify-around md:justify-start md:py-8 md:space-y-8 shrink-0 border-r border-green-200/30">
      <Link href="/" className={`p-2 md:p-3 hover:bg-green-100/50 rounded-lg transition-colors ${isActive("/")}`}>
        <Home className="w-5 h-5 md:w-6 md:h-6" />
        <span className="sr-only">Home</span>
      </Link>
      <Link
        href="/about"
        className={`p-2 md:p-3 hover:bg-green-100/50 rounded-lg transition-colors ${isActive("/about")}`}
      >
        <User className="w-5 h-5 md:w-6 md:h-6" />
        <span className="sr-only">About</span>
      </Link>
      <Link
        href="/projects"
        className={`p-2 md:p-3 hover:bg-green-100/50 rounded-lg transition-colors ${isActive("/projects")}`}
      >
        <Folder className="w-5 h-5 md:w-6 md:h-6" />
        <span className="sr-only">Projects</span>
      </Link>
      <Link
        href="/experience"
        className={`p-2 md:p-3 hover:bg-green-100/50 rounded-lg transition-colors ${isActive("/experience")}`}
      >
        <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
        <span className="sr-only">Experience</span>
      </Link>
      <Link
        href="/achievements"
        className={`p-2 md:p-3 hover:bg-green-100/50 rounded-lg transition-colors ${isActive("/achievements")}`}
      >
        <Award className="w-5 h-5 md:w-6 md:h-6" />
        <span className="sr-only">Achievements</span>
      </Link>
      <Link
        href="/contact"
        className={`p-2 md:p-3 hover:bg-green-100/50 rounded-lg transition-colors ${isActive("/contact")}`}
      >
        <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
        <span className="sr-only">Contact</span>
      </Link>
    </div>
  )
}
