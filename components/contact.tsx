import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">CONTACT</h2>

      <div className="card">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-vt323 neon-text-blue mb-4">Get In Touch</h3>
          <p className="mb-6 text-white/80 max-w-2xl">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              asChild
              className="bg-transparent border border-neon-pink text-neon-pink hover:bg-neon-pink/10 hover:shadow-[0_0_15px_rgba(255,42,255,0.5)] rounded-xl"
            >
              <a href="mailto:seanb2016@gmail.com" className="flex items-center gap-2">
                <Mail size={18} /> Email Me
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 hover:shadow-[0_0_15px_rgba(42,253,255,0.5)] rounded-xl"
            >
              <a
                href="https://linkedin.com/in/seanblonien"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-neon-orange text-neon-orange hover:bg-neon-orange/10 hover:shadow-[0_0_15px_rgba(255,158,42,0.5)] rounded-xl"
            >
              <a
                href="https://github.com/seanblonien"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={18} /> GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
