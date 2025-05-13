import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "StudiWell",
      description:
        "An education web app developed with Azure AI, HTML, Tailwind, CSS, JavaScript, Python, and Node.js.",
      details: [
        "Enhance health and learning performance by 70%, developing better mental health, productivity and learning habits.",
        "Features: AI Study Assistant with Phi-3 Mini, personalized Mental Health Tracker, Companion Hub for Specialist advising, and Management Hub for task tracking.",
      ],
      date: "December 2024 - January 2025",
      github: "https://github.com/HungH206/StudyWellAI-Project",
      demo: "#",
      achievement: "Best Use of VS Code Extensions Award",
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
      github: "https://github.com/HungH206",
      demo: "#",
    },
  ]

  return (
    <div className="p-16">
      <h1 className="text-5xl font-bold mb-8">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-[#e8dbb8] pb-4">
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="text-black/70">{project.date}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4">{project.description}</p>
              <ul className="list-disc pl-5 space-y-2">
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              {project.achievement && (
                <div className="mt-4 p-2 bg-[#e8dbb8]/30 rounded-md">
                  <span className="font-semibold">Achievement:</span> {project.achievement}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between pt-4 border-t">
              <Button variant="outline" asChild>
                <Link href={project.github}>
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button variant="secondary" className="bg-[#2a2a2a] text-white hover:bg-[#3a3a3a]" asChild>
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
