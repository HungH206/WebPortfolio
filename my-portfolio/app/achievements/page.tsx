import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

export default function AchievementsPage() {
  const achievements = [
    {
      title: "Best Use of VS Code Extensions Award",
      event: "Accelerated App Development With Github Copilot Hackathon",
      project: "StudiWell",
      date: "December 2024 - February 2025",
      description:
        "Recognized for innovative use of VS Code extensions in developing the StudiWell education platform.",
    },
    {
      title: "Phi Theta Kappa Honor Society Member",
      event: "Seattle Central College",
      date: "March 2023 - August 2024",
      description: "Selected for academic excellence and leadership potential.",
    },
  ]

  return (
    <div className="p-16">
      <h1 className="text-5xl font-bold mb-8">Awards</h1>

      <div className="space-y-8">
        {achievements.map((achievement, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 bg-[#e8dbb8]">
              <div className="p-2 bg-[#2a2a2a] rounded-full">
                <Trophy className="h-8 w-8 text-[#e8dbb8]" />
              </div>
              <div>
                <CardTitle>{achievement.title}</CardTitle>
                <CardDescription className="text-black/70">
                  {achievement.event} {achievement.project && `• ${achievement.project}`}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-4 text-sm font-medium">{achievement.date}</div>
              <p>{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
