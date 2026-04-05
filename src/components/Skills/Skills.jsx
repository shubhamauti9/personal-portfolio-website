import useFadeIn from '../../hooks/useFadeIn'
import './Skills.css'

export default function Skills() {
  const titleRef = useFadeIn()

  const skillsData = [
    { category: 'Programming Languages', items: ['Java', 'Python', 'Go', 'React', 'Native'] },
    { category: 'Databases', items: ['SQL', 'Redis', 'Vector DB'] },
    { category: 'Tools', items: ['Spring Boot', 'Postman', 'Git', 'Lang graph', 'Docker', 'Kafka', 'Fast API', 'Django', 'Fast MCP'] }
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="card fade-in" ref={titleRef}>
          <h2 className="section-title">Skills</h2>
          
          <div className="skills-grid">
            {skillsData.map((skillGroup, index) => (
              <SkillCard key={index} data={skillGroup} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({ data }) {
  const ref = useFadeIn()
  return (
    <div className="inner-card skill-card fade-in" ref={ref}>
      <h3>{data.category}</h3>
      <div className="skill-tags">
        {data.items.map((item, idx) => (
          <span key={idx} className="skill-tag">{item}</span>
        ))}
      </div>
    </div>
  )
}
