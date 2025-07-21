import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const skills = {
    "Programming Languages": ["Python", "C++", "Java", "Swift", "Go", "JavaScript", "HTML", "CSS", "PostgreSQL", "MySQL"],
    "Frameworks and Tools": [
      "Node.js",
      "React",
      "Flask",
      "FastAPI",
      "Git",
      "Docker",
      "VS Code",
      "Xcode",
      "Azure",
      "Google Cloud",
      "Figma",
      "AWS",
    ],
    Technical: [
      "OOP",
      "Data Structures",
      "Algorithms",
      "Software Engineering",
      "Machine Learning",
      "Prompt Engineering",
      "Programming",
    ],
    Other: [
      "Customer Service",
      "Technical Writing",
      "Microsoft Office",
      "Problem Solving",
      "Time Management",
      "Analytics",
    ],
    Languages: ["Vietnamese (Native)", "English (Proficient)"],
  }

  return (
    <div className="p-16">
      <h1 className="text-5xl font-bold mb-8">About Me</h1>

      <div className="mb-12">
        <p className="text-xl mb-6">
          I'm Hung Gia Hoang, a Computer Science student at the University of Houston with a passion for software
          development, machine learning, and creating impactful applications.
        </p>
        <p className="text-xl mb-6">
          Currently in my junior year, I'm focused on expanding my knowledge in various programming languages and
          frameworks while working on projects that solve real-world problems.
        </p>
        <p className="text-xl">
          I'm also graduated with an Associate's Degree in Computer Science from Seattle Central College.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <Card key={category} className="overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span key={skill} className="bg-[#e8dbb8] text-black px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
