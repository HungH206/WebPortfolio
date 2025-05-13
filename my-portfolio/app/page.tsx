import Link from "next/link"
import { Home, User, Folder, Briefcase, Award, MessageSquare, Linkedin, Github } from "lucide-react"
import { Button } from "../components/ui/button"
import Layout from "@/app/layout"

export default function Page() {
  return (
     <Layout>
    <div className="flex h-screen">
      {/* Sidebar */}

      <div className="w-24 bg-[#f5e9c9] flex flex-col items-center py-8 space-y-8">
        <Link href="/" className="p-3 hover:bg-[#e8dbb8] rounded-lg transition-colors">
          <Home className="w-6 h-6" />
        </Link>
        <Link href="/about" className="p-3 hover:bg-[#e8dbb8] rounded-lg transition-colors">
          <User className="w-6 h-6" />
        </Link>
        <Link href="/projects" className="p-3 hover:bg-[#e8dbb8] rounded-lg transition-colors">
          <Folder className="w-6 h-6" />
        </Link>
        <Link href="/experience" className="p-3 hover:bg-[#e8dbb8] rounded-lg transition-colors">
          <Briefcase className="w-6 h-6" />
        </Link>
        <Link href="/achievements" className="p-3 hover:bg-[#e8dbb8] rounded-lg transition-colors">
          <Award className="w-6 h-6" />
        </Link>
        <Link href="/contact" className="p-3 hover:bg-[#e8dbb8] rounded-lg transition-colors">
          <MessageSquare className="w-6 h-6" />
        </Link>
      </div>

      {/* Main Content */}
     
      <div className="flex-1 bg-[#dff0d0] p-16 flex flex-col justify-between">
        <div className="flex">
          {/* Text Content */}
          <div className="w-1/2 pr-8">
            <h1 className="text-7xl font-bold leading-tight mb-8">
              Hello World,
              <br />
              it's Hung!
            </h1>
            <p className="text-xl">
              My name is Hung Hoang, and I'm in Junior year at University of Houston with a passion for software
              development, machine learning, and creating impactful applications.
            </p>
          </div>

          {/* Profile Image */}
          <div className="w-1/2 flex justify-center items-start">
            <div className="w-80 h-80 bg-[#e5e5e5] rounded-full"></div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-8">
          <Button variant="secondary" className="bg-[#2a2a2a] text-white hover:bg-[#3a3a3a] rounded-md px-6 py-3">
            More Projects
            <Link href="https://devpost.com/hoanghungkz4" className="p-2 hover:opacity-80 transition-opacity"></Link>
          </Button>
          <Link href="https://linkedin.com" className="p-2 hover:opacity-80 transition-opacity">
            <Linkedin className="w-8 h-8" />
          </Link>
          <Link href="https://github.com" className="p-2 hover:opacity-80 transition-opacity">
            <Github className="w-8 h-8" />
          </Link>
        </div>
        </div>
    </div>
</Layout>
  )
}
