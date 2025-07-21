import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExperiencePage() {
  const education = [
    {
      degree: "B.S., Computer Science",
      institution: "University of Houston",
      location: "Houston, TX",
      period: "Aug 2024 - May 2027",
      details: [
        "College of Natural Sciences and Mathematics",
        "Relevant coursework: Intro to Programming (C++), Discrete Math, Data Structures and Algorithms with C++",
        "Active member of Society of Hispanic Professional Engineers (SHPE) at UH and CodePath",
        "Participated in Hackathons: HackTX 24, HackRice 14, and Accelerated App Development With Github Copilot Hackathon",
      ],
    },
    {
      degree: "A.S., Computer Science",
      institution: "Seattle Central College",
      location: "Seattle, WA",
      period: "2022-2024",
      details: [
        "Department of Natural Sciences and Mathematics",
        "Relevant coursework: Intro to Programming (Python), Computer Programming I and II (Java), Database Development (SQL)",
        "Member of the Seattle Central's Computer Science Club, Phi Theta Kappa Honor Society, MESA.",
        "Participated in NSC Summer 2024 Hackathon and won 3rd place with Early Weather Detection System (EDWS) project.",
      ],
    },
  ]

  const experience = [
    {
      position: "Student Service Worker",
      organization: "University Of Houston Dining Services",
      location: "Houston, TX",
      period: "Aug 2025",
      details: [
        "More detail about the role and responsibilities coming soon.",
      ],
    },
    {
      position: "Student Volunteer",
      organization: "University District Food Bank",
      location: "Seattle, WA",
      period: "Oct 2023 - Aug 2024",
      details: [
        "Volunteered 86 hours managing check-ins and distributing groceries, improving service efficiency by 50%.",
        "Provided customer service and distributing warm meals, groceries, and household items to low-income families.",
        "Support front of house with customer check-ins, streamlined registration process reduces customers' wait time by 50%.",
      ],
    },
  ]
  return (
    <div className="p-16">
      <h1 className="text-5xl font-bold mb-8">Experience</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{edu.degree}</CardTitle>
                    <CardDescription className="text-lg mt-1">
                      {edu.institution}, {edu.location}
                    </CardDescription>
                  </div>
                  <span className="text-sm bg-[#e8dbb8] px-3 py-1 rounded-full">{edu.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{exp.position}</CardTitle>
                    <CardDescription className="text-lg mt-1">
                      {exp.organization}, {exp.location}
                    </CardDescription>
                  </div>
                  <span className="text-sm bg-[#e8dbb8] px-3 py-1 rounded-full">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      </div>
  )
}