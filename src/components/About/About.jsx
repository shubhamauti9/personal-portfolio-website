import useFadeIn from '../../hooks/useFadeIn'
import './About.css'

/**
 * About Me component — brief bio and personal details.
 * Demonstrates: simple component structure, using custom hooks.
 */
export default function About() {
  const titleRef = useFadeIn()
  const cardRef = useFadeIn()

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="card fade-in" ref={titleRef}>
          <h2 className="section-title">About Me</h2>
          
          <div className="inner-card about-card fade-in" ref={cardRef}>
            <p>
              Software Engineer with 3+ years of experience building high-performance Backend and AI systems. 
            </p>
            <p>
              I hold an M.Tech in Computer Engineering from Somaiya Vidyavihar University and currently work at Mirae Asset Sharekhan, where I've architected scalable platforms, AI trading agents, and RAG-powered applications that drive real business impact.
            </p>
            <p>
              I'm passionate about solving complex problems at the intersection of software engineering and artificial intelligence — from Low Code No Code frameworks and MCP-based trading APIs to conversational AI bots and computer vision systems. My work spans Java, Python, Go, and React, backed by tools like Spring Boot, Kafka, Docker, and LangGraph.
            </p>
            <p>
              When I'm not engineering systems, I'm exploring new tech, participating in hackathons, and pushing the boundaries of what AI can do in finance and beyond.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">Mumbai, Maharashtra, India</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value">shubham.auti1999@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Interests</span>
                <span className="detail-value">Backend, AI, Web Dev, Research</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
