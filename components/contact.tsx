"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Send } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })
      setIsSubmitting(false)

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">CONTACT</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="text-2xl font-vt323 neon-text-blue mb-4">Get In Touch</h3>
          <p className="mb-6 text-white/80">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:seanb2016@gmail.com"
              className="flex items-center gap-3 text-white/80 hover:text-neon-pink transition-colors"
            >
              <Mail className="text-neon-pink" size={20} />
              seanb2016@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/seanblonien"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/80 hover:text-neon-blue transition-colors"
            >
              <Linkedin className="text-neon-blue" size={20} />
              linkedin.com/in/seanblonien
            </a>
            <a
              href="https://github.com/seanblonien"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/80 hover:text-neon-orange transition-colors"
            >
              <Github className="text-neon-orange" size={20} />
              github.com/seanblonien
            </a>
          </div>
        </div>

        <div className="card">
          <h3 className="text-2xl font-vt323 neon-text-blue mb-4">Send a Message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                required
                className="bg-dark-blue/30 border-neon-blue/30 focus:border-neon-pink/70 focus:ring-neon-pink/20"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-dark-blue/30 border-neon-blue/30 focus:border-neon-pink/70 focus:ring-neon-pink/20"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="bg-dark-blue/30 border-neon-blue/30 focus:border-neon-pink/70 focus:ring-neon-pink/20"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-transparent border border-neon-pink text-neon-pink hover:bg-neon-pink/10 hover:shadow-[0_0_15px_rgba(255,42,255,0.5)]"
            >
              <Send size={16} className="mr-2" /> {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
