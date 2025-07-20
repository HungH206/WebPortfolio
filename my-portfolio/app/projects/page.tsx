import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
     {
      title: "CareConnect",
      description:
        "A healthcare IOT web app developed with AWS Bedrock with Pinecone Knowledge Base, Anthropic's Claude 3.5 Haiku Model, React, TypeScript, Python, Firebase, Zoom API and Vercel Web Host.",
      details: [
        "This healthcare platform aims to connect patients with their health provider, track health progress with AI Health Assistant Support, and easily schedule appointments.",
        "Features: AI Health Assistant with Claude 3.5 Haiku, Care Team Platform with Zoom Video Call and Twilio Message, schedule visits for your appointments, report tracker with summarized detail, and IOT Health Vitals tracking.",
      ],
      date: "May - June 2025",
      github: "https://github.com/HungH206/StudiWell",
      demo: "#",
      image: "/Careconnect.png?height=100&width=200",
    },
    {
      title: "StudiWell",
      description:
        "An education web app developed with Azure AI, HTML, Tailwind, CSS, JavaScript, Python, and Node.js.",
      details: [
        "Enhance health and learning performance by 70%, developing better mental health, productivity and learning habits.",
        "Features: AI Study Assistant with Phi-3 Mini, personalized Mental Health Tracker, Companion Hub for Specialist advising, and Management Hub for task tracking.",
      ],
      date: "December 2024 - January 2025",
      github: "https://github.com/HungH206/StudiWell",
      demo: "#",
      achievement: "Best Use of VS Code Extensions Award",
      image: "/studiwell.png?height=100&width=200",
    },
    {
      title: "PixelPal",
      description: "A gaming recommendation web app developed with Python, JavaScript, OpenAI API, Figma.",
      details: [
        "Collaborated in a team of four to compete in HackTX 24 at University of Texas at Austin.",
        "Designed an algorithm that improved game recommendation by 50% based on user preferences and interactions.",
      ],
      date: "November 2024",
      github: "https://github.com/HungH206/PixelPal",
      demo: "#",
      image: "/Pixelpal.png?height=100&width=200",
    },
    {
      title: "HospiTalk",
      description:
        "A healthcare web app that focuses on prioritizing patient care with React, JavaScript, PostgreSQL, and Auth0.",
      details: [
        "Collaborated in a team of four to compete in HackRice 14 at Rice University.",
        "Improved 50% nurse-doctor communication, and increased response efficiency by 90%.",
      ],
      date: "September 2024",
      github: "https://github.com/HungH206/HospiTalk",
      demo: "#",
      image: "/Hospitalk.png?height=100&width=200",
    },
    {
      title: "Early Weather Detection System",
      description: "A low-cost early weather detection system using a Micro:bit hardware kit and JavaScript. Project not availible on Github.",
      details: [
        "Led a 3-member team to compete in North Seattle College Summer 2024 Hackathon.",
        "Improved weather detection accuracy by 15% and resource access by 30%, enhancing disaster preparedness.",
      ],
      date: "July 2024",
      github: "https://github.com/HungH206/EWDS",
      demo: "#",
      image: "/Codingaction.png?height=100&width=200",
    },
  ]

  return (
    <div className="p-4 sm:p-8 md:p-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Projects</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            {/* Project Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} project screenshot`}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>

            <CardHeader className="bg-[#e8dbb8] pb-4">
              <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
              <CardDescription className="text-black/70">{project.date}</CardDescription>
            </CardHeader>

            <CardContent className="pt-6">
              <p className="mb-4 text-sm sm:text-base">{project.description}</p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              {project.achievement && (
                <div className="mt-4 p-2 bg-[#e8dbb8]/30 rounded-md">
                  <span className="font-semibold text-sm sm:text-base">Achievement:</span> {project.achievement}
                </div>
              )}
            </CardContent>

            <CardFooter className="flex flex-col sm:flex-row justify-between gap-3 pt-4 border-t">
              <Button variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                <Link href={project.github}>
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button
                variant="secondary"
                className="bg-[#2a2a2a] text-white hover:bg-[#3a3a3a] w-full sm:w-auto"
                asChild
              >
                <Link href={project.demo}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
