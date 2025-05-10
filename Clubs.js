import React from 'react';
import './ServicePage.css';
import './Clubs.css';
import talentScoutingIcon from '../../assets/images/service-icons/talent-scouting.jpeg';
import performanceAnalysisIcon from '../../assets/images/service-icons/performance-analysis.jpeg';
import coachingDevelopmentIcon from '../../assets/images/service-icons/coaching-development.jpeg';
import youthAcademyIcon from '../../assets/images/service-icons/unsure-pathway.avif';
import medicalScienceIcon from '../../assets/images/service-icons/medical-science.webp';
import businessDevelopmentIcon from '../../assets/images/service-icons/supporting-staff.jpeg';

const Clubs = () => {
  const services = [
    {
      id: 1,
      title: 'Career Workshops',
      description: 'Regular workshops to help your players build their identity beyond football.',
      icon: talentScoutingIcon,
      features: [
        'Personalised career planning',
        'Structured workshops',
        'Practical skills assessments'
      ]
    },
    {
      id: 2,
      title: 'Mental Health Workshops',
      description: 'Understanding mental health and the impact it could have away from football.',
      icon: performanceAnalysisIcon,
      features: [
        'Evidence based psychology',
        'In-house assessments',
        'Mental health workshops'
      ]
    },
    {
      id: 3,
      title: 'Coaching Development',
      description: 'Comprehensive programs to gain your players football badges.',
      icon: coachingDevelopmentIcon,
      features: [
        'UEFA coaching courses',
        'FA coaching badges',
        'External workshop series'
      ]
    },
    {
      id: 4,
      title: 'Pathway Planning',
      description: 'Specialised programs and resources to nurture your players options.',
      icon: youthAcademyIcon,
      features: [
        'Age-specific pathway programs',
        'Co-ordination between clubs and players',
        'Planning exit pathways and dual careers'
      ]
    },
    {
      id: 5,
      title: 'Exploring Sports Science',
      description: 'Exploring your players interests in sport science.',
      icon: medicalScienceIcon,
      features: [
        'Biomechanics, psychology and physiology programs',
        'Understanding nutrition',
        'Strength and conditioning workshops'
      ]
    },
    {
      id: 6,
      title: 'Supporting Your Staff',
      description: 'We understand the impact on your staff, providing essential training and resources to cope.',
      icon: businessDevelopmentIcon,
      features: [
        'Coping strategies',
        'Understanding the impact of transition',
        'Framework for supporting players'
      ]
    }
  ];

  return (
    <div className="service-page">
      <div className="service-header">
        <h1>Services for Clubs</h1>
        <p className="service-tagline">Enhancing your club's knowledge to prepare your players</p>
      </div>

      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <div className="service-content">
              <div className="service-description">
                <p>{service.description}</p>
              </div>
              <div className="service-features">
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button className="explore-btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clubs; 