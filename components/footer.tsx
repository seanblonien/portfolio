export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-neon-blue/20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-white/60">© {currentYear} Sean Blonien. All rights reserved.</p>
        <p className="text-white/40 text-sm mt-2">Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  )
}
