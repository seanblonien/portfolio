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

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 md:gap-6">
          {/* Digital Profile Card */}
          <AnimatedSection delay={0.1}>
            <Card className="card h-full border-neon-pink-50 flex flex-col rounded-xl overflow-hidden shadow-neon-pink-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-vt323 neon-text-blue text-center">DIGITAL PROFILE</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                {/* Profile Avatar */}
                <div className="w-full aspect-square mb-4 bg-darker-blue/70 border-2 border-neon-blue rounded-xl overflow-hidden flex items-center justify-center relative shadow-neon-blue-lg">
                  <div className="absolute inset-0 grid-overlay opacity-30"></div>
                  <span className="font-vt323 neon-text-pink text-responsive-sb">SB</span>
                </div>

                {/* Profile Stats */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-text-white-70">CLASS</span>
                    <span className="font-vt323 text-lg neon-text-blue">Senior Engineer</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-text-white-70">LEVEL</span>
                    <span className="font-vt323 text-lg neon-text-orange">5 years</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-text-white-70">SPECIALTY</span>
                    <span className="font-vt323 text-lg neon-text-pink">Full Stack</span>
                  </div>

                  <Separator className="my-2 bg-neon-blue-30" />

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Cpu size={16} className="text-neon-blue" />
                      <span className="text-text-white-90">Tech Architect</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code size={16} className="text-neon-pink" />
                      <span className="text-text-white-90">Problem Solver</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap size={16} className="text-neon-orange" />
                      <span className="text-text-white-90">Continuous Learner</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart size={16} className="text-neon-pink" />
                      <span className="text-text-white-90">Wellness Enthusiast</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy size={16} className="text-neon-orange" />
                      <span className="text-text-white-90">Marathon Runner</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gamepad2 size={16} className="text-neon-blue" />
                      <span className="text-text-white-90">VR Explorer</span>
                    </div>
                  </div>

                  <Separator className="my-4 bg-neon-blue-30" />

                  <div className="space-y-2">
                    <h3 className="text-text-white-70 text-sm mb-2">SKILLS</h3>
                    <div className="flex flex-wrap gap-2">
                      {/* Frontend Skills */}
                      <Badge className="bg-dark-blue/70 border border-neon-blue-30 text-white hover:border-neon-pink-50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-neon-blue">
                        TypeScript
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue-30 text-white hover:border-neon-pink-50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-neon-blue">
                        JavaScript
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue-30 text-white hover:border-neon-pink-50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-neon-blue">
                        React
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue-30 text-white hover:border-neon-pink-50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-neon-blue">
                        React Native
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue-30 text-white hover:border-neon-pink-50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-neon-blue">
                        Expo
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue-30 text-white hover:border-neon-pink-50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-neon-blue">
                        CSS
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue-30 text-white hover:border-neon-pink-50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-neon-blue">
                        Tailwind
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue-30 text-white hover:border-neon-pink-50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-neon-blue">
                        Next.js
                      </Badge>

                      {/* Backend Skills */}
                      <Badge className="bg-dark-blue/70 border border-neon-blue-30 text-white hover:border-neon-pink-50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-neon-blue">
                        NodeJs
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue-30 text-white hover:border-neon-pink-50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-neon-blue">
                        Java
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue-30 text-white hover:border-neon-pink-50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-neon-blue">
                        Python
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue-30 text-white hover:border-neon-pink-50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-neon-blue">
                        Firebase
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue-30 text-white hover:border-neon-pink-50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-neon-blue">
                        NoSQL
                      </Badge>

                      {/* Cloud & DevOps Skills */}
                      <Badge className="bg-dark-blue/70 border border-neon-blue-30 text-white hover:border-neon-pink-50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-neon-blue">
                        GCP
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue-30 text-white hover:border-neon-pink-50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-neon-blue">
                        AWS
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue-30 text-white hover:border-neon-pink-50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-neon-blue">
                        DevOps
                      </Badge>
                      <Badge className="bg-dark-blue/70 border border-neon-blue-30 text-white hover:border-neon-pink-50 hover:bg-dark-blue/90 transition-all duration-300 rounded-xl shadow-neon-blue">
                        Cloud Architecture
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Content Container */}
          <div className="space-y-3 md:space-y-4">
            {/* Who I Am */}
            <AnimatedSection delay={0.2}>
              <Card className="card border-neon-blue-30 rounded-xl overflow-hidden shadow-neon-blue-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-vt323 neon-text-pink">WHO I AM</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-white-90">
                  {`Welcome to my stretch of the digital highway! As a Senior Software Engineer navigating the dynamic worlds of technology and AI, I've dedicated my journey to intentional software design that prioritizes product innovation and a seamless user experience. I thrive on building robust, elegant solutions that solve real-world challenges and empower users. Whether I'm diving deep into code or mentoring a team, I'm passionate about crafting intuitive, responsive systems that drive meaningful impact.`}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge className="bg-neon-pink-20 text-neon-pink rounded-xl">Passionate</Badge>
                    <Badge className="bg-neon-blue-20 text-neon-blue rounded-xl">Innovative</Badge>
                    <Badge className="bg-neon-orange-20 text-neon-orange rounded-xl">User-Focused</Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Career Journey */}
            <AnimatedSection delay={0.3}>
              <Card className="card border-neon-blue-30 rounded-xl overflow-hidden shadow-neon-blue-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-vt323 neon-text-blue">CAREER JOURNEY</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-white-90">
                    {`Cruising the digital highway at Pariveda gave me a chance to explore diverse tech landscapes early on. Fresh out of college, I led a full-stack migration from Angular to React—a challenge that sharpened my problem-solving skills and sparked my passion for building complete solutions. I also had the opportunity to mentor a team of interns on a process improvement project for the Girl Scouts using Power Automate, which showed me firsthand how rewarding it is to guide others through real-world challenges. My time at Southwest Airlines reinforced just how important scalable infrastructure and thoughtful design are for real-time, data-driven platforms.`}
                  </p>
                  <p className="mt-3 text-text-white-90">
                    {`Shifting gears, I decided to pursue my side project, FlyFit, full time. FlyFit is a B2B mobile fitness app for schools and organizations, offering fitness tracking, social mileage challenges, and other health and wellness features. Over the past year, I've devoted myself to building and scaling FlyFit into a production-grade, real-time full-stack app—ensuring every stat and leaderboard updates seamlessly. I truly enjoy the purpose-driven nature of my work at Fly Bodies, knowing that the software I create helps motivate people to live healthier, more connected lives.`}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge className="bg-neon-blue-20 text-neon-blue rounded-xl">Tech Lead</Badge>
                    <Badge className="bg-neon-pink-20 text-neon-pink rounded-xl">Mentor</Badge>
                    <Badge className="bg-neon-orange-20 text-neon-orange rounded-xl">Entrepreneur</Badge>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge className="bg-darker-blue text-neon-blue border border-neon-blue-50 rounded-xl shadow-neon-blue">React Native</Badge>
                    <Badge className="bg-darker-blue text-neon-blue border border-neon-blue-50 rounded-xl shadow-neon-blue">Node.js</Badge>
                    <Badge className="bg-darker-blue text-neon-blue border border-neon-blue-50 rounded-xl shadow-neon-blue">AWS</Badge>
                    <Badge className="bg-darker-blue text-neon-blue border border-neon-blue-50 rounded-xl shadow-neon-blue">GCP</Badge>
                    <Badge className="bg-darker-blue text-neon-blue border border-neon-blue-50 rounded-xl shadow-neon-blue">TypeScript</Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Beyond Code */}
            <AnimatedSection delay={0.4}>
              <Card className="card border-neon-blue-30 rounded-xl overflow-hidden shadow-neon-blue-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-vt323 neon-text-orange">BEYOND CODE</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-white-90">
                  {`Off the grid, I like to keep the momentum going. Whether I'm taking on a marathon, getting lost in a VR adventure, or soaking up the vibe at an EDM festival, I find these experiences remind me of the core values in my work—persistence, exploration, and always aiming to improve. When I'm not at the keyboard, I mix it up with HIIT workouts, weight training, and even a round of golf, balanced by a little downtime for meditation. I also mentor an after-school coding club at a local school, where I enjoy sharing my passion for tech and helping the next generation explore both the digital and real world.`}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge className="bg-neon-orange-20 text-neon-orange rounded-xl shadow-neon-orange">Running</Badge>
                    <Badge className="bg-neon-orange-20 text-neon-orange rounded-xl shadow-neon-orange">VR Gaming</Badge>
                    <Badge className="bg-neon-orange-20 text-neon-orange rounded-xl shadow-neon-orange">EDM</Badge>
                    <Badge className="bg-neon-orange-20 text-neon-orange rounded-xl shadow-neon-orange">Meditation</Badge>
                    <Badge className="bg-neon-orange-20 text-neon-orange rounded-xl shadow-neon-orange">HIIT</Badge>
                    <Badge className="bg-neon-orange-20 text-neon-orange rounded-xl shadow-neon-orange">Golf</Badge>
                    <Badge className="bg-neon-orange-20 text-neon-orange rounded-xl shadow-neon-orange">Mentoring</Badge>
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
