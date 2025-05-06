import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"
import AnimatedSection from "./animated-section"

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <AnimatedSection>
        <h2 className="section-title">CONTACT</h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="card">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-vt323 neon-text-blue mb-4">Get In Touch</h3>
            <p className="mb-4 md:mb-6 text-text-white-80 max-w-2xl">
              {`Feel free to reach out if you're looking for a developer, have a question, or just want to connect.`}
            </p>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
                <Button
                  asChild
                  className="bg-transparent border border-neon-pink text-neon-pink hover:bg-neon-pink-10 hover:shadow-neon-pink-lg rounded-xl"
                >
                  <a href="mailto:seanb2016@gmail.com" className="flex items-center gap-2">
                    <Mail size={18} /> Email Me
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-neon-blue text-neon-blue hover:bg-neon-blue-10 hover:shadow-neon-blue-lg rounded-xl"
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
                  className="border-neon-orange text-neon-orange hover:bg-neon-orange-10 hover:shadow-neon-orange-lg rounded-xl"
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
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
