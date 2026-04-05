import useFadeIn from '../../hooks/useFadeIn'
import './Projects.css'

export default function Projects() {
  const titleRef = useFadeIn()

  const projectsData = [
    {
      id: 1,
      title: 'Project Title 1',
      desc: 'Short description of what this project does and why it matters.',
      tech: ['Python', 'React', 'Node.js'],
      codeLink: '#',
      demoLink: '#'
    },
    {
      id: 2,
      title: 'Project Title 2',
      desc: 'Short description of what this project does and why it matters.',
      tech: ['TensorFlow', 'Flask'],
      codeLink: '#',
      demoLink: '#'
    },
    {
      id: 3,
      title: 'Project Title 3',
      desc: 'Short description of what this project does and why it matters.',
      tech: ['Java', 'Spring Boot'],
      codeLink: '#',
      demoLink: '#'
    },
    {
      id: 4,
      title: 'Project Title 4',
      desc: 'Short description of what this project does and why it matters.',
      tech: ['HTML', 'CSS', 'JS'],
      codeLink: '#'
    }
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="card fade-in" ref={titleRef}>
          <h2 className="section-title">Projects</h2>
          
          <div className="projects-grid">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} data={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ data }) {
  const ref = useFadeIn()

  return (
    <div className="inner-card project-card fade-in" ref={ref}>
      <div className="project-header">
        <h3>{data.title}</h3>
        <div className="project-links">
          {data.codeLink && <a href={data.codeLink} aria-label="Source code">Code</a>}
          {data.demoLink && <a href={data.demoLink} aria-label="Live demo">Demo</a>}
        </div>
      </div>
      <p>{data.desc}</p>
      <div className="tech-stack">
        {data.tech.map((t, i) => (
          <span key={i} className="tech-tag">{t}</span>
        ))}
      </div>
    </div>
  )
}
