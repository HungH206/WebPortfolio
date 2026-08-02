"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Home, User, Folder, Briefcase, Award, MessageSquare, Menu, X, BookOpenText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path ? "bg-green-200/50 text-green-800" : "text-gray-600 hover:text-green-600"
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navigationItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/about", icon: User, label: "About" },
    { href: "/projects", icon: Folder, label: "Projects" },
    { href: "/experience", icon: Briefcase, label: "Experience" },
    { href: "/journey", icon: BookOpenText, label: "Journey" },
    { href: "/achievements", icon: Award, label: "Awards" },
    { href: "/contact", icon: MessageSquare, label: "Contact" },
  ]

  return (
    <>
      {/* Horizontal Navigation Bar */}
      <nav className="w-full h-16 bg-[#f5e9c9] border-b border-green-200/30 flex items-center justify-between px-6 shrink-0">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-gray-800 hover:text-green-600 transition-colors">
            Hung Hoang
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navigationItems.map((item) => {
            const IconComponent = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${isActive(item.href)}`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <Button
          onClick={toggleMobileMenu}
          variant="default"
          className="md:hidden p-2 hover:bg-green-100/50 text-gray-600 hover:text-green-600"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/50" onClick={toggleMobileMenu}>
          <div className="absolute top-16 left-0 right-0 bg-[#f5e9c9] border-b border-green-200/30 p-4">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={toggleMobileMenu}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors ${isActive(item.href)}`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
