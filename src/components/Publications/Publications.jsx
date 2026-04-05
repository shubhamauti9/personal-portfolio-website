import useFadeIn from '../../hooks/useFadeIn'
import './Publications.css'
import healthPaper from '../../../assets/A proposed approach for personalized health assistance.pdf'
import plasticPaper from '../../../assets/Final Version - ICBTEdinburgh’ 2025_0331.pdf'

export default function Publications() {
  const titleRef = useFadeIn()

  const publicationsData = [
    {
      id: 1,
      year: '2024',
      title: 'PLASTIC WASTE DETECTION BY OBJECT RECOGNITION USING COMPUTER VISION AND AI TECHNIQUES',
      desc: "The petrochemical sector has produced many polymers that have aided human development, but poor plastic disposal has harmed the environment, threatening ecosystems and wildlife. Plastics do not break down easily, making waste management a global issue. Recycling is crucial to limit new plastic production and reduce environmental harm. Manual sorting of plastics is hard and costly hence this new system uses hyperspectral imaging to identify and separate plastic waste accurately. It classifies and detects plastic types for efficient processing, allowing recyclable plastics to be sorted while non-recyclables are disposed of responsibly. This system aims to improve recycling efficiency and lessen plastic waste's environmental impact.",
      link: plasticPaper,
      downloadName: 'Plastic_Waste_Detection_2024.pdf'
    },
    {
      id: 2,
      year: '2021',
      title: 'PROPOSED APPROACH FOR PERSONALIZED HEALTH ASSISTANCE',
      desc: "During the time of pandemic, the patients with medical history were majorly neglected due to the urgency of the situation this made the patients to suffer. The proposed approach helps to bridges the gap between the doctor and patient so that doctors would easily manage their patients. This would lead to doctors to manage patients with proper attention and continue to diagnose them.",
      link: healthPaper,
      downloadName: 'Personalized_Health_Assistance_2021.pdf'
    }
  ]

  return (
    <section id="publications" className="section">
      <div className="container">
        <div className="card fade-in" ref={titleRef}>
          <h2 className="section-title">Publications</h2>

          <div className="publications-list">
            {publicationsData.map((pub) => (
              <PublicationCard key={pub.id} data={pub} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PublicationCard({ data }) {
  const ref = useFadeIn()

  return (
    <div className="inner-card publication-card fade-in" ref={ref}>
      <div className="pub-year">{data.year}</div>
      <div className="pub-content">
        <h3>{data.title}</h3>
        <p className="pub-authors">{data.authors}</p>
        <p className="pub-venue" style={{ marginBottom: '8px', fontStyle: 'italic', color: 'var(--text-light)' }}>{data.venue}</p>
        {data.desc && <p className="pub-desc" style={{ marginBottom: '16px', color: 'var(--text-light)', fontSize: '0.9rem' }}>{data.desc}</p>}

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '16px' }}>
          <a href={data.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Paper</a>
          <a href={data.link} download={data.downloadName} className="btn btn-secondary btn-icon" aria-label="Download Paper" title="Download Paper">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
