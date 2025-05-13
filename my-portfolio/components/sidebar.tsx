"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Folder, Briefcase, Award, MessageSquare } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "bg-[#e8dbb8]" : ""
  }

  return (
    <div className="w-24 bg-[#f5e9c9] flex flex-col items-center py-8 space-y-8 shrink-0">
      <Link href="/" className={`p-3 hover:bg-[#e8dbb8] rounded-lg transition-colors ${isActive("/")}`}>
        <Home className="w-6 h-6" />
        <span className="sr-only">Home</span>
      </Link>
    <Link href="/about" className={`p-3 hover:bg-[#e8dbb8] rounded-lg transition-colors ${isActive("/about")}`}>
      <User className="w-6 h-6" />
      <span className="sr-only">About</span>
    </Link>
      <Link href="/projects" className={`p-3 hover:bg-[#e8dbb8] rounded-lg transition-colors ${isActive("/projects")}`}>
        <Folder className="w-6 h-6" />
        <span className="sr-only">Projects</span>
      </Link>
      <Link
        href="/experience"
        className={`p-3 hover:bg-[#e8dbb8] rounded-lg transition-colors ${isActive("/experience")}`}
      >
        <Briefcase className="w-6 h-6" />
        <span className="sr-only">Experience</span>
      </Link>
      <Link
        href="/achievements"
        className={`p-3 hover:bg-[#e8dbb8] rounded-lg transition-colors ${isActive("/achievements")}`}
      >
        <Award className="w-6 h-6" />
        <span className="sr-only">Achievements</span>
      </Link>
      <Link href="/contact" className={`p-3 hover:bg-[#e8dbb8] rounded-lg transition-colors ${isActive("/contact")}`}>
        <MessageSquare className="w-6 h-6" />
        <span className="sr-only">Contact</span>
      </Link>
    </div>
  )
}
