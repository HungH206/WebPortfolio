import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

export default function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5" />
          <a href="mailto:Hoanghungkz4@gmail.com" className="hover:underline">
            Hoanghungkz4@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Linkedin className="h-5 w-5" />
          <a
            href="https://linkedin.com/in/hoang-gia-hung-b414ba220/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/hoang-gia-hung-b414ba220/
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Github className="h-5 w-5" />
          <a href="https://github.com/HungH206" target="_blank" rel="noopener noreferrer" className="hover:underline">
            github.com/HungH206
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
