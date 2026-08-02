import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpenText, ExternalLink, FileText, Microscope, PenLine, Plus } from "lucide-react"

export default function JourneyPage() {
  const researchTopics = [
    {
      title: "Human-Centered AI",
      description:
        "Exploring how AI assistants can support students, patients, and care teams while keeping the experience clear and useful.",
    },
    {
      title: "Applied Machine Learning",
      description:
        "Studying practical ways to use models, data pipelines, and evaluation methods in real-world software projects.",
    },
    {
      title: "Health and Education Technology",
      description:
        "Reflecting on projects that improve access, communication, productivity, and learning outcomes.",
    },
  ]

  const journeyNotes = [
    {
      title: "Add Your First Research Reflection",
      paperTitle: "Research paper title goes here",
      authors: "Author One, Author Two, Author Three",
      date: "Coming soon",
      topic: "Research Reflection",
      summary:
        "Use this card format to document what the paper studied, what you learned, and how it connects to your projects or research interests.",
      paperLink: "#",
      reflectionLink: "#",
      status: "Draft template",
    },
  ]

  return (
    <div className="p-4 sm:p-8 md:p-16">
      <div className="mb-12 max-w-3xl">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 bg-[#2a2a2a] rounded-full">
            <BookOpenText className="h-7 w-7 text-[#e8dbb8]" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Journey</h1>
        </div>
        <p className="text-lg sm:text-xl">
          A space for research notes, project reflections, and questions I am exploring as I grow as a computer science
          student and software developer.
        </p>
      </div>

      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Microscope className="h-7 w-7 text-green-700" />
          <h2 className="text-2xl sm:text-3xl font-bold">Research Interests</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {researchTopics.map((topic) => (
            <Card key={topic.title}>
              <CardHeader className="bg-[#e8dbb8]">
                <CardTitle>{topic.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p>{topic.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
          <div className="flex items-center gap-3">
            <PenLine className="h-7 w-7 text-green-700" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Journey Notes</h2>
              <p className="text-gray-700">Research paper reflections, article links, and personal takeaways.</p>
            </div>
          </div>
          <Button variant="secondary" className="bg-[#2a2a2a] text-white hover:bg-[#3a3a3a] w-full sm:w-auto" asChild>
            <Link href="#journey-note-template">
              <Plus className="mr-2 h-4 w-4" />
              Add Note Link
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {journeyNotes.map((note) => (
            <Card key={note.title} className="overflow-hidden">
              <CardHeader className="bg-[#e8dbb8]">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-3 inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-sm font-medium">
                      {note.topic}
                    </div>
                    <CardTitle>{note.title}</CardTitle>
                    <CardDescription className="text-black/70 mt-2">{note.date}</CardDescription>
                  </div>
                  <span className="text-sm bg-[#2a2a2a] text-white px-3 py-1 rounded-full whitespace-nowrap">
                    {note.status}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-6 space-y-5">
                <div>
                  <h3 className="font-semibold mb-1">Paper</h3>
                  <p>{note.paperTitle}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Authors</h3>
                  <p>{note.authors}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Reflection</h3>
                  <p>{note.summary}</p>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                  <Link href={note.paperLink}>
                    <FileText className="mr-2 h-4 w-4" />
                    Paper Link
                  </Link>
                </Button>
                <Button
                  variant="secondary"
                  className="bg-[#2a2a2a] text-white hover:bg-[#3a3a3a] w-full sm:w-auto"
                  asChild
                >
                  <Link href={note.reflectionLink}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Reflection Article
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div id="journey-note-template" className="mt-8 scroll-mt-20">
          <Card className="overflow-hidden">
            <CardHeader className="bg-[#e8dbb8]">
              <CardTitle>Journey Note Template</CardTitle>
              <CardDescription className="text-black/70">
                Add a new object to the journeyNotes list with these fields.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="rounded-md border border-gray-200 p-4">
                  <span className="font-semibold">title</span>
                  <p className="mt-1 text-gray-700">Name of your reflection post.</p>
                </div>
                <div className="rounded-md border border-gray-200 p-4">
                  <span className="font-semibold">paperTitle</span>
                  <p className="mt-1 text-gray-700">Full title of the research paper.</p>
                </div>
                <div className="rounded-md border border-gray-200 p-4">
                  <span className="font-semibold">authors</span>
                  <p className="mt-1 text-gray-700">Names of the paper authors.</p>
                </div>
                <div className="rounded-md border border-gray-200 p-4">
                  <span className="font-semibold">reflectionLink</span>
                  <p className="mt-1 text-gray-700">URL to your article, blog post, or reflection page.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
