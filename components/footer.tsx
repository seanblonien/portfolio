import { GithubIcon } from "lucide-react"
import { formatDate } from "@/lib/utils"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const lastUpdated = formatDate(new Date('2025-05-04T21:00:00Z'))

  return (
    <footer className="py-8 border-t border-neon-blue/20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:flex md:justify-between md:items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-white/60">
            © {currentYear} Sean Blonien
          </p>
          <p className="text-white/40 text-sm mt-1">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <p className="text-white/40 text-sm">
            Built with <span className="text-white/60">Next.js</span> and <span className="text-white/60">Tailwind</span>
          </p>

          <a
            href="https://github.com/seanblonien/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white/60 hover:text-neon-blue transition-colors text-sm"
          >
            <GithubIcon size={14} className="mr-1" />
            Source Code
          </a>
        </div>
      </div>
    </footer>
  )
}
