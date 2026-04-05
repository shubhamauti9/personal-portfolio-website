import useFadeIn from '../../hooks/useFadeIn'
import './Education.css'

export default function Education() {
  const titleRef = useFadeIn()

  // Example of passing data, in a real app this could come from props or a JSON file
  const educationData = [
    {
      id: 1,
      years: '2021 – 2023',
      degree: 'Master of Technology in Computer Engineering',
      institution: 'Somaiya Vidyavihar University',
      desc: 'SGPA : 8.5'
    },
    {
      id: 2,
      years: '2017 – 2021',
      degree: 'Bachelor of Engineering in Computer Engineering',
      institution: 'University of Mumbai',
      desc: 'CGPI : 8.16'
    },
    {
      id: 3,
      years: '2015 – 2017',
      degree: 'Higher Secondary School Certificate',
      institution: 'Maharashtra State Board',
      desc: 'Percentage : 80.5%'
    },
    {
      id: 4,
      years: '2015',
      degree: 'Secondary School Certificate',
      institution: 'Maharashtra State Board',
      desc: 'Percentage : 94%'
    }
  ]

  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <div className="card fade-in" ref={titleRef}>
          <h2 className="section-title">Education</h2>

          <div className="timeline">
            {educationData.map((item) => (
              <TimelineItem key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Sub-component for individual timeline items
function TimelineItem({ data }) {
  const ref = useFadeIn()

  return (
    <div className="timeline-item fade-in" ref={ref}>
      <div className="inner-card timeline-card">
        <span className="timeline-year">{data.years}</span>
        <h3>{data.degree}</h3>
        <p className="institution">{data.institution}</p>
        <p>{data.desc}</p>
      </div>
    </div>
  )
}
