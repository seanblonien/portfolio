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
            <Card className="card h-full border-neon-pink/50 flex flex-col rounded-xl overflow-hidden shadow-[0_0_15px_rgba(255,42,255,0.3)]">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-vt323 neon-text-blue text-center">DIGITAL PROFILE</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                {/* Profile Avatar */}
                <div className="w-full aspect-square mb-4 bg-darker-blue/70 border-2 border-neon-blue rounded-xl overflow-hidden flex items-center justify-center relative shadow-[0_0_10px_rgba(42,253,255,0.5)]">
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

                  <Separator className="my-4 bg-neon-blue/30" />

                  <div className="space-y-2">
                    <h3 className="text-white/70 text-sm mb-2">SKILLS</h3>
                    <div className="flex flex-wrap gap-2">
                      {/* Frontend Skills */}
                      <Badge className="bg-dark-blue/70 border border-neon-blue/30 text-white hover:border-neon-pink/50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.2)]">
                        TypeScript
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue/30 text-white hover:border-neon-pink/50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.2)]">
                        JavaScript
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue/30 text-white hover:border-neon-pink/50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.2)]">
                        React
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue/30 text-white hover:border-neon-pink/50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.2)]">
                        React Native
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue/30 text-white hover:border-neon-pink/50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.2)]">
                        Expo
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue/30 text-white hover:border-neon-pink/50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.2)]">
                        CSS
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue/30 text-white hover:border-neon-pink/50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.2)]">
                        Tailwind
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue/30 text-white hover:border-neon-pink/50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.2)]">
                        Next.js
                      </Badge>

                      {/* Backend Skills */}
                      <Badge className="bg-dark-blue/70 border border-neon-blue/30 text-white hover:border-neon-pink/50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.2)]">
                        NodeJs
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue/30 text-white hover:border-neon-pink/50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.2)]">
                        Java
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue/30 text-white hover:border-neon-pink/50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.2)]">
                        Python
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue/30 text-white hover:border-neon-pink/50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.2)]">
                        Firebase
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue/30 text-white hover:border-neon-pink/50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.2)]">
                        NoSQL
                      </Badge>

                      {/* Cloud & DevOps Skills */}
                      <Badge className="bg-dark-blue/70 border border-neon-blue/30 text-white hover:border-neon-pink/50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.2)]">
                        GCP
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue/30 text-white hover:border-neon-pink/50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.2)]">
                        AWS
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue/30 text-white hover:border-neon-pink/50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.2)]">
                        DevOps
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue/30 text-white hover:border-neon-pink/50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.2)]">
                        Cloud Architecture
                      </Badge>
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
              <Card className="card border-neon-blue/30 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(42,253,255,0.3)]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-vt323 neon-text-pink">WHO I AM</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">
                    Welcome to my stretch of the digital highway! As a Senior Software Engineer navigating the dynamic worlds of technology and AI, I've dedicated my journey to intentional software design that prioritizes product innovation and a seamless user experience. I thrive on building robust, elegant solutions that solve real-world challenges and empower users. Whether I'm diving deep into code or mentoring a team, I'm passionate about crafting intuitive, responsive systems that drive meaningful impact.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge className="bg-neon-pink/20 text-neon-pink rounded-xl">Passionate</Badge>
                    <Badge className="bg-neon-blue/20 text-neon-blue rounded-xl">Innovative</Badge>
                    <Badge className="bg-neon-orange/20 text-neon-orange rounded-xl">User-Focused</Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Career Journey */}
            <AnimatedSection delay={0.3}>
              <Card className="card border-neon-blue/30 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(42,253,255,0.3)]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-vt323 neon-text-blue">CAREER JOURNEY</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">
                    Cruising the digital highway at Pariveda, I quickly learned to navigate diverse tech landscapes. Just one year out of college, I led a full-stack migration from Angular to React—a ride that sharpened my technical problem-solving skills and ignited my passion for building elegant, end-to-end solutions as a tech lead. One of the most rewarding stops on my journey was managing a team of interns on a process improvement project for the Girl Scouts, where we developed automated software to streamline operations. This experience deepened my love for coaching, as I enjoyed mentoring young developers and guiding them through real technical challenges with agile practices.
                  </p>
                  <p className="mt-3 text-white/90">
                    Cruising down the digital highway with my mobile app side project, FlyFit, I saw its potential accelerate—especially when our mileage challenges struck a chord with users. Realizing it was time to shift into a higher gear, I left consulting to join Fly Bodies full-time, determined to see just how far we could push FlyFit with dedicated focus and relentless innovation. Today, I'm thrilled to watch FlyFit thrive as we build a dataevent-driven mobile app that delivers real-time experiences, ensuring every stat, leaderboard, and feed refreshes as smoothly as a perfectly paved freeway. 
                  </p>
                  
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge className="bg-neon-blue/20 text-neon-blue rounded-xl">Tech Lead</Badge>
                    <Badge className="bg-neon-pink/20 text-neon-pink rounded-xl">Mentor</Badge>
                    <Badge className="bg-neon-orange/20 text-neon-orange rounded-xl">Entrepreneur</Badge>
                  </div>
                  
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge className="bg-darker-blue text-neon-blue border border-neon-blue/50 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.3)]">React Native</Badge>
                    <Badge className="bg-darker-blue text-neon-blue border border-neon-blue/50 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.3)]">Node.js</Badge>
                    <Badge className="bg-darker-blue text-neon-blue border border-neon-blue/50 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.3)]">AWS</Badge>
                    <Badge className="bg-darker-blue text-neon-blue border border-neon-blue/50 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.3)]">GCP</Badge>
                    <Badge className="bg-darker-blue text-neon-blue border border-neon-blue/50 rounded-xl shadow-[0_0_5px_rgba(42,253,255,0.3)]">TypeScript</Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Beyond Code */}
            <AnimatedSection delay={0.4}>
              <Card className="card border-neon-blue/30 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(42,253,255,0.3)]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-vt323 neon-text-orange">BEYOND CODE</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">
                  Off the grid, the drive continues. Whether I'm conquering a marathon, diving into immersive VR adventures, or losing myself in the energy of an EDM festival, I find that these experiences mirror the principles fueling my work—endurance, exploration, and a relentless pursuit of optimization. Away from the keyboard, I balance my passion for wellness with HIIT workouts, weight training, and even the precision of a round of golf, while also taking time for meditation to refuel and refocus. Beyond my personal pursuits, I mentor an after-school coding club at a local school, inspiring the next generation to navigate both the digital and physical realms with skill and curiosity.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge className="bg-neon-orange/20 text-neon-orange rounded-xl shadow-[0_0_5px_rgba(255,158,42,0.3)]">Running</Badge>
                    <Badge className="bg-neon-orange/20 text-neon-orange rounded-xl shadow-[0_0_5px_rgba(255,158,42,0.3)]">VR Gaming</Badge>
                    <Badge className="bg-neon-orange/20 text-neon-orange rounded-xl shadow-[0_0_5px_rgba(255,158,42,0.3)]">EDM</Badge>
                    <Badge className="bg-neon-orange/20 text-neon-orange rounded-xl shadow-[0_0_5px_rgba(255,158,42,0.3)]">Meditation</Badge>
                    <Badge className="bg-neon-orange/20 text-neon-orange rounded-xl shadow-[0_0_5px_rgba(255,158,42,0.3)]">HIIT</Badge>
                    <Badge className="bg-neon-orange/20 text-neon-orange rounded-xl shadow-[0_0_5px_rgba(255,158,42,0.3)]">Golf</Badge>
                    <Badge className="bg-neon-orange/20 text-neon-orange rounded-xl shadow-[0_0_5px_rgba(255,158,42,0.3)]">Mentoring</Badge>
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
