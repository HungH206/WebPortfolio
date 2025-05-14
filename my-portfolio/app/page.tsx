import Link from "next/link"
import { Home, User, Folder, Briefcase, Award, MessageSquare, Linkedin, Github } from "lucide-react"
import { Button } from "../components/ui/button"

export default function Page() {
  return (
    <div className="p-16 flex flex-col justify-between h-full">
      <div className="flex">
        {/* Text Content */}
        <div className="w-1/2 pr-8">
          <h1 className="text-7xl font-bold leading-tight mb-8">
            Hello World!
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
          <Link href="/projects">More Projects</Link>
        </Button>
        <Link
          href="https://linkedin.com/in/hoang-gia-hung-b414ba220/"
          className="p-2 hover:opacity-80 transition-opacity"
        >
          <Linkedin className="w-8 h-8" />
        </Link>
        <Link href="https://github.com/HungH206" className="p-2 hover:opacity-80 transition-opacity">
          <Github className="w-8 h-8" />
        </Link>
      </div>
    </div>
  )
}
