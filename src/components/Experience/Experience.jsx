import useFadeIn from '../../hooks/useFadeIn'
import '../Education/Education.css' // Reusing timeline styles
import './Experience.css'

export default function Experience() {
  const titleRef = useFadeIn()

  const experienceData = [
    {
      id: 1,
      duration: 'March 2026 – Present',
      role: 'Assistant Manager',
      company: 'Mirae Asset Sharekhan',
      desc: 'Currently leading the development of a multi-agent trading system where autonomous agents collaborate to make intelligent trade decisions, with the core agent architected as the Share Trade Agent. Overseeing and managing all existing platforms including the LCNC framework, SharekhanMCP, SharekhanKar, and ShareBOT. Additionally spearheaded the development of an Inter Office Memo (IOM) automation application built on the LCNC platform, streamlining internal memo workflows and reducing manual overhead across the organization.'
    },
    {
      id: 2,
      duration: 'June 2023 – March 2026',
      role: 'Software Engineer / Associate',
      company: 'Mirae Asset Sharekhan',
      desc: 'As a full-time Associate, I co-architected a scalable Low Code No Code (LCNC) framework that cut deployment cycles from 3+ months to under 3 weeks. Built core platform capabilities including a custom search engine, workflow engine, RBAC, and security framework. Developed DIY and Franchise onboarding applications reducing account opening time to 24 hours. On the AI front, engineered SharekhanMCP for high-volume trading APIs, integrated RAG-powered SharekhanKar automating 60% of capital market queries, and built ShareBOT — an AI agent for end-to-end conversational trading. Also implemented a highly concurrent data migration tool in Go, centralizing data sources and halving migration effort.'
    },
    {
      id: 3,
      duration: 'November 2022 – June 2023',
      role: 'Software Engineering Intern',
      company: 'Mirae Asset Sharekhan',
      desc: 'Contributed to the migration of core Backend middleware from Java 8 to Java 17, enhancing application security, runtime efficiency and overall system stability. Worked on improving the performance of middleware services, ensuring seamless integration across enterprise applications.'
    },
    {
      id: 4,
      duration: 'November 2019 – January 2020',
      role: 'Network Engineer Intern',
      company: 'Jawaharlal Nehru Port Trust',
      desc: 'Worked on configuring and troubleshooting network devices including routers, switches, and firewalls. Assisted in the deployment and maintenance of network infrastructure, ensuring optimal performance and security.'
    }
  ]

  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="card fade-in" ref={titleRef}>
          <h2 className="section-title">Experience</h2>

          <div className="timeline">
            {experienceData.map((item) => (
              <ExperienceItem key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ data }) {
  const ref = useFadeIn()

  return (
    <div className="timeline-item fade-in" ref={ref}>
      <div className="inner-card timeline-card">
        <span className="timeline-year">{data.duration}</span>
        <h3>{data.role}</h3>
        <p className="institution">{data.company}</p>
        <p>{data.desc}</p>
      </div>
    </div>
  )
}
