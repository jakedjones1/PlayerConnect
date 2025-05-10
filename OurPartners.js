import React from "react";
import "./OurPartners.css";

const partners = [
  {
    name: "Premier League",
    logo: "/images/partners/premier-league.png",
    description: "Supporting player development and transition programs across all levels of football.",
    programs: ["Player Development", "Career Transition", "Education Support"]
  },
  {
    name: "Professional Footballers' Association",
    logo: "/images/partners/pfa.png",
    description: "Providing comprehensive support for players' career development and well-being.",
    programs: ["Career Guidance", "Mental Health Support"]
  },
  {
    name: "League Football Education",
    logo: "/images/partners/lfe.png",
    description: "Delivering education and career development programs for young players.",
    programs: ["Education", "Apprenticeships", "Career Planning"]
  },
  {
    name: "Sporting Chance",
    logo: "/images/partners/sporting-chance.png",
    description: "Specialized support for athletes' mental health and well-being.",
    programs: ["Mental Health", "Addiction Support", "Well-being Programs"]
  },
  {
    name: "Football Association",
    logo: "/images/partners/the-fa.png",
    description: "Comprehensive support for player development and transition.",
    programs: ["Coaching Courses", "Player Welfare", "Career Development"]
  },
  {
    name: "Sporting Futures",
    logo: "/images/partners/sporting-futures.png",
    description: "Career transition and education support for athletes.",
    programs: ["Career Planning", "Education", "Job Placement"]
  }
];

const OurPartners = () => {
  return (
    <div className="partners-container">
      <div className="partners-header">
        <h1>Our Partners</h1>
        <p className="partners-subtitle">
          Working with leading organizations to provide comprehensive support for athletes' transition journey.
        </p>
      </div>

      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <div className="partner-logo">
              <img src={partner.logo} alt={`${partner.name} logo`} />
            </div>
            <div className="partner-content">
              <h2>{partner.name}</h2>
              <p className="partner-description">{partner.description}</p>
              <div className="partner-programs">
                <h3>Programs Offered:</h3>
                <ul>
                  {partner.programs.map((program, programIndex) => (
                    <li key={programIndex}>{program}</li>
                  ))}
                </ul>
              </div>
              <button className="partner-button">Learn More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="partners-cta">
        <h2>Become a Partner</h2>
        <p>Join our network of organizations dedicated to supporting athletes in their transition journey.</p>
        <button className="cta-button">Partner With Us</button>
      </div>
    </div>
  );
};

export default OurPartners; 