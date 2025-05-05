import AnimatedSection from "./animated-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Code, Heart, Zap, Trophy, Cpu, Gamepad2 } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="section-container">
      <AnimatedSection>
        <h2 className="section-title">ABOUT ME</h2>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
          {/* Digital Profile Card */}
          <AnimatedSection delay={0.1}>
            <Card className="card h-full border-neon-pink/50 flex flex-col">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-vt323 neon-text-blue text-center">DIGITAL PROFILE</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                {/* Profile Avatar */}
                <div className="w-full aspect-square mb-4 bg-darker-blue/70 border-2 border-neon-blue rounded-md overflow-hidden flex items-center justify-center relative">
                  <div className="absolute inset-0 grid-overlay opacity-30"></div>
                  <span className="text-6xl font-vt323 neon-text-pink">SB</span>
                </div>

                {/* Profile Stats */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">CLASS</span>
                    <span className="font-vt323 text-lg neon-text-blue">Senior Engineer</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-white/70">LEVEL</span>
                    <span className="font-vt323 text-lg neon-text-orange">5 years</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-white/70">SPECIALTY</span>
                    <span className="font-vt323 text-lg neon-text-pink">Full Stack</span>
                  </div>

                  <Separator className="my-2 bg-neon-blue/30" />

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Cpu size={16} className="text-neon-blue" />
                      <span className="text-white/90">Tech Architect</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code size={16} className="text-neon-pink" />
                      <span className="text-white/90">Problem Solver</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap size={16} className="text-neon-orange" />
                      <span className="text-white/90">Continuous Learner</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart size={16} className="text-neon-pink" />
                      <span className="text-white/90">Wellness Enthusiast</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy size={16} className="text-neon-orange" />
                      <span className="text-white/90">Marathon Runner</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gamepad2 size={16} className="text-neon-blue" />
                      <span className="text-white/90">VR Explorer</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Content Container */}
          <div className="space-y-4">
            {/* Who I Am */}
            <AnimatedSection delay={0.2}>
              <Card className="card border-neon-blue/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-vt323 neon-text-pink">WHO I AM</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">
                    Welcome to my stretch of the digital highway! As a Senior Software Engineer navigating the dynamic world of technology, I see my work through the lens of neon-lit horizons and precisely engineered systems. My journey is one of continuous acceleration, building robust applications and crafting elegant user experiences that empower businesses and their customers. My passion lies in architecting solutions that aren't just functional, but feel intuitive, responsive, and ultimately drive meaningful impact.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge className="bg-neon-pink/20 text-neon-pink">Passionate</Badge>
                    <Badge className="bg-neon-blue/20 text-neon-blue">Innovative</Badge>
                    <Badge className="bg-neon-orange/20 text-neon-orange">User-Focused</Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Career Journey */}
            <AnimatedSection delay={0.3}>
              <Card className="card border-neon-blue/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-vt323 neon-text-blue">CAREER JOURNEY</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">
                    Throughout my career, from consulting across various digital landscapes to directing engineering at Fly Bodies, I've honed my skills as both a navigator and an architect. I chart courses through complex technical challenges while simultaneously designing the underlying infrastructure and interfaces. This involves everything from optimizing data pipelines and backend systems for performance and scale, to meticulously building front-end components that deliver a smooth, zero-refresh user experience - essentially building the high-speed lanes and beautiful rest stops of the digital realm.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge className="bg-darker-blue text-neon-blue border border-neon-blue/50">React Native</Badge>
                    <Badge className="bg-darker-blue text-neon-blue border border-neon-blue/50">Node.js</Badge>
                    <Badge className="bg-darker-blue text-neon-blue border border-neon-blue/50">AWS</Badge>
                    <Badge className="bg-darker-blue text-neon-blue border border-neon-blue/50">GCP</Badge>
                    <Badge className="bg-darker-blue text-neon-blue border border-neon-blue/50">TypeScript</Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Beyond Code */}
            <AnimatedSection delay={0.4}>
              <Card className="card border-neon-blue/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-vt323 neon-text-orange">BEYOND CODE</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">
                    Off the grid, the drive continues. Whether I'm tackling the endurance challenge of a marathon, exploring new simulated realities in VR games, or finding rhythm and flow through EDM and meditation, these pursuits mirror the principles of software development I value: endurance, exploration, finding harmony in complexity, and a relentless drive for optimization and improvement. My interest in health and wellness complements my technical mindset, bringing balance to how I approach both code and life.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge className="bg-neon-orange/20 text-neon-orange">Running</Badge>
                    <Badge className="bg-neon-orange/20 text-neon-orange">VR Gaming</Badge>
                    <Badge className="bg-neon-orange/20 text-neon-orange">EDM</Badge>
                    <Badge className="bg-neon-orange/20 text-neon-orange">Meditation</Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
