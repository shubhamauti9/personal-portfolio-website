import { useState } from 'react'
import useFadeIn from '../../hooks/useFadeIn'
import './Footer.css'

export default function Footer() {
  const ref = useFadeIn()
  const [showEmail, setShowEmail] = useState(false)

  return (
    <footer id="contact" className="section footer-section">
      <div className="container">
        <div className="card footer-card fade-in" ref={ref}>
          <h2>Let's Connect</h2>
          <p>Feel free to reach out for collaborations, opportunities, or just a chat.</p>
          
          <div className="footer-links">
            <a href="#" onClick={(e) => { e.preventDefault(); setShowEmail(true); }} className="btn btn-primary">Send Email</a>
            <a href="https://github.com/shubhamauti9" className="social-link" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/shubhamauti9/" className="social-link" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
          
          <p className="copyright">© 2026 Shubham Auti. All rights reserved.</p>
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
    </footer>
  )
}
