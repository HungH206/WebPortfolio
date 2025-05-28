import Link from "next/link"
import Image from "next/image"
import { Home, User, Folder, Briefcase, Award, MessageSquare, Linkedin, Github } from "lucide-react"
import { Button } from "../components/ui/button"

export default function Page() {
  return (
    <div className="px-4 sm:px-8 md:px-16 py-8 md:py-16 flex flex-col items-center justify-center min-h-full text-center">
      {/* Profile Image - Responsive sizing */}
      <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-[#e5e5e5] rounded-full mb-8 md:mb-12">
        <Image 
            src="/HungHoang.jpg" 
            alt="Profile Image" 
            width={350} 
            height={300} 
            className="rounded-full mb-8 md:mb-12 object-cover w-full h-full" 
          />
      </div>

      {/* Main Heading - Responsive font size */}
      <div>
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8">Hello World!</h1>
      </div>
      {/* Bio Text - Responsive width and font size */}
      <p className="text-base sm:text-lg md:text-xl max-w-xs sm:max-w-lg md:max-w-2xl mb-10 md:mb-16">
        My name is Hung Hoang, a Junior Computer Science Student at University of Houston with a passion for software
            development, machine learning, and creating impactful applications.
      </p>

      {/* Social Links - Responsive spacing */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:space-x-8">
        <Button
          variant="secondary"
          className="bg-[#2a2a2a] text-white hover:bg-[#3a3a3a] rounded-md px-4 sm:px-6 py-2 sm:py-3"
        >
          <Link href="/projects">More Projects</Link>
        </Button>
        <Link
          href="https://linkedin.com/in/hoang-gia-hung-b414ba220/"
          className="p-2 hover:opacity-80 transition-opacity"
        >
          <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
        </Link>
        <Link href="https://github.com/HungH206" className="p-2 hover:opacity-80 transition-opacity">
          <Github className="w-6 h-6 sm:w-8 sm:h-8" />
        </Link>
      </div>
    </div>
  )
}