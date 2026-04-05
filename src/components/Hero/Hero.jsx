import { useState } from 'react'
import useFadeIn from '../../hooks/useFadeIn'
import './Hero.css'
import profilePic from '../../../assets/shubham.auti.jpeg'
import resumeUrl from '../../../assets/shubham.auti.resume.pdf'

/**
 * Hero component — the first thing visitors see.
 * Contains name, title, tagline, social links, and photo placeholder.
 */
export default function Hero() {
  const ref = useFadeIn()
  const [showEmail, setShowEmail] = useState(false)

  return (
    <section id="hero" className="section hero-section">
      <div className="hero-container">
        <div className="hero-card card" ref={ref}>
          <div className="hero-content">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">Shubham Auti</h1>
            <p className="hero-title">Software Engineer / Assistant Manager</p>
            <p className="hero-tagline">
              Software Engineer with over 3 years of experience architecting high performance and scalable Backend & AI applications.
            </p>

            <div className="hero-socials">
              <a href="https://github.com/shubhamauti9" className="social-link" aria-label="GitHub">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/shubhamauti9/" className="social-link" aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); setShowEmail(true); }} className="social-link" aria-label="Email">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
            <div className="hero-buttons">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Resume</a>
              <a href={resumeUrl} download="Shubham_Auti_Resume.pdf" className="btn btn-secondary btn-icon" aria-label="Download Resume" title="Download Resume">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
              <a href="#about" className="btn btn-primary">Know More ↓</a>
            </div>
          </div>

          <div className="hero-photo">
            <img src={profilePic} alt="Shubham Auti" className="profile-image" />
          </div>
        </div>
      </div>

      {showEmail && (
        <div className="email-modal-overlay" onClick={() => setShowEmail(false)}>
          <div className="email-modal card" onClick={e => e.stopPropagation()}>
            <h3>Let's Connect!</h3>
            <p style={{marginBottom: '8px', color: 'var(--text-light)'}}>You can reach me directly at:</p>
            <div className="email-box">
              <strong>shubham.auti1999@gmail.com</strong>
            </div>
            <button className="btn btn-primary" onClick={() => setShowEmail(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
}
