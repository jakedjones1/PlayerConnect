import React, { useState } from "react";
import "./OurMission.css";

const teamMembers = [
  {
    name: "Jake Thompson",
    role: "Founder & CEO",
    image: "images/jake.png",
    description: "Passionate about helping athletes transition into new careers.",
  },
  {
    name: "Sarah Williams",
    role: "Career Advisor",
    image: "images/sarah.png",
    description: "Expert in career development for athletes post-retirement.",
  },
  {
    name: "Michael Johnson",
    role: "Performance Analyst",
    image: "images/michael.png",
    description: "Specialist in data-driven performance analysis.",
  },
  {
    name: "Emma Carter",
    role: "Sports Psychologist",
    image: "images/emma.png",
    description: "Helping athletes maintain mental resilience during transitions.",
  },
];

function OurMission() {
  const [activeCategory, setActiveCategory] = useState('all');

  const quotes = [
    {
      text: "The transition from professional football was challenging, but with the right support and guidance, I found my new path in coaching.",
      author: "Michael Johnson",
      role: "Former Premier League Player",
      category: "retired"
    },
    {
      text: "The academy program helped me understand that there's life beyond football, and it's important to prepare for it early.",
      author: "Sarah Thompson",
      role: "Academy Graduate",
      category: "academy"
    },
    {
      text: "Having a support system during my transition was crucial. The mentorship program gave me confidence to explore new opportunities.",
      author: "David Wilson",
      role: "Retired Professional",
      category: "retired"
    },
    {
      text: "The career planning workshops opened my eyes to various opportunities in the sports industry.",
      author: "Emma Davis",
      role: "Academy Player",
      category: "academy"
    },
    {
      text: "The mental health support during my transition was invaluable. It helped me cope with the changes and find my new identity.",
      author: "James Brown",
      role: "Former Championship Player",
      category: "retired"
    },
    {
      text: "Learning about financial planning early in my career was a game-changer. It gave me security for my future.",
      author: "Lisa Chen",
      role: "Academy Graduate",
      category: "academy"
    },
    {
      text: "The networking events helped me build connections that led to my current role in sports management.",
      author: "Robert Taylor",
      role: "Retired Professional",
      category: "retired"
    },
    {
      text: "The education support program helped me balance my studies with football training.",
      author: "Tom Anderson",
      role: "Academy Player",
      category: "academy"
    },
    {
      text: "The transition support program gave me the tools and confidence to start my own sports academy.",
      author: "Daniel Martinez",
      role: "Former La Liga Player",
      category: "retired"
    }
  ];

  const filteredQuotes = activeCategory === 'all' 
    ? quotes 
    : quotes.filter(quote => quote.category === activeCategory);

  return (
    <div className="mission-container">
      <div className="mission-header">
        <h1>Our Mission</h1>
        <p>Supporting athletes through their transition journey</p>
      </div>

      <div className="mission-content">
        <div className="mission-text">

          
          <div className="mission-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Athletes Supported</p>
            </div>
            <div className="stat">
              <h3>97%</h3>
              <p>Success Rate</p>
            </div>
            <div className="stat">
              <h3>45+</h3>
              <p>Partner Organisations</p>
            </div>
          </div>
        </div>

        <div className="quotes-section">
          <div className="quotes-filter">
            <button 
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Stories
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'retired' ? 'active' : ''}`}
              onClick={() => setActiveCategory('retired')}
            >
              Retired Players
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'academy' ? 'active' : ''}`}
              onClick={() => setActiveCategory('academy')}
            >
              Academy Players
            </button>
          </div>

          <div className="quotes-grid">
            {filteredQuotes.map((quote, index) => (
              <div key={index} className="quote-card">
                <div className="quote-content">
                  <p className="quote-text">"{quote.text}"</p>
                  <div className="quote-author">
                    <h4>{quote.author}</h4>
                    <p>{quote.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
