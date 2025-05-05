import AnimatedSection from "./animated-section"

export default function About() {
  return (
    <section id="about" className="section-container">
      <AnimatedSection>
        <h2 className="section-title">ABOUT ME</h2>
        <div className="card">
          <p className="text-lg mb-4">
            Welcome to my stretch of the digital highway! As a Senior Software Engineer navigating the dynamic world of health and wellness tech, I see my work through the lens of neon-lit horizons and precisely engineered systems. My journey is one of continuous acceleration, building robust applications and crafting elegant user experiences that help people on their own paths to well-being. My passion lies in architecting solutions that aren't just functional, but feel intuitive, responsive, and ultimately, empower users to achieve their goals, like a perfectly tuned engine on an open road.
          </p>
          <p className="text-lg mb-4">
            Throughout my career, from consulting across various digital landscapes to directing engineering at Fly Bodies, I've honed my skills as both a navigator and an architect. I chart courses through complex technical challenges (using tools like React Native, Node.js, and Cloud platforms like GCP/AWS) while simultaneously designing the underlying infrastructure and interfaces. This involves everything from optimizing data pipelines and backend systems for performance and scale, to meticulously building front-end components that deliver a smooth, zero-refresh user experience - essentially building the high-speed lanes and beautiful rest stops of the digital realm.
          </p>
          <p className="text-lg">
            Off the grid, the drive continues. Whether I'm tackling the endurance challenge of a marathon, exploring new simulated realities in VR games, or finding rhythm and flow through EDM and meditation, these pursuits mirror the principles of software development I value: endurance, exploration, finding harmony in complexity, and a relentless drive for optimization and improvement. It's all part of navigating the larger journey, building experiences, and constantly seeking the next innovation on the horizon.
          </p>
        </div>
      </AnimatedSection>
    </section>
  )
}
