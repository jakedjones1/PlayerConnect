import React from "react";
import "./ServicePage.css";
import careerGuidanceIcon from '../../assets/images/service-icons/career-guidance.jpeg';
import educationSupportIcon from '../../assets/images/service-icons/education-support.webp';
import skillDevelopmentIcon from '../../assets/images/service-icons/skill-development.jpeg';
import mentalHealthIcon from '../../assets/images/service-icons/mental-health.jpeg';
import financialEducationIcon from '../../assets/images/service-icons/financial-education.jpeg';
import professionalNetworkingIcon from '../../assets/images/service-icons/professional-networking.jpeg';

const Academy = () => {
  const services = [
    {
      id: 1,
      title: 'Career Guidance',
      description: 'Personalised career planning and development advice.',
      icon: careerGuidanceIcon,
      features: [
        'Individual career assessments',
        'Professional development workshops',
        'Dedicated career advisors'
      ]
    },
    {
      id: 2,
      title: 'Education Support',
      description: 'Academic support and scholarship opportunities to balance education with football development.',
      icon: educationSupportIcon,
      features: [
        'Academic tutoring services',
        'University preparation',
        'Online learning resources'
      ]
    },
    {
      id: 3,
      title: 'Skill Development',
      description: 'Specialised programs and workshops to enhance your employability skills',
      icon: skillDevelopmentIcon,
      features: [
        'Weekly training workshops',
        'In-person and online support',
        'Assessments and certifications'
      ]
    },
    {
      id: 4,
      title: 'Mental Health Support',
      description: 'Professional psychological support for your mental health.',
      icon: mentalHealthIcon,
      features: [
        'Learning different coping techniques',
        'Managing stress and anxiety',
        '24/7 support services'
      ]
    },
    {
      id: 5,
      title: 'Financial Education',
      description: 'Early financial education and planning resources to prepare for your future.',
      icon: financialEducationIcon,
      features: [
        'Budgeting workshops',
        'Understanding investments',
        'Financial goal setting'
      ]
    },
    {
      id: 6,
      title: 'Professional Networking',
      description: 'Connect with industry professionals, mentors, and organisations.',
      icon: professionalNetworkingIcon,
      features: [
        'Mentorship programs',
        'Professional workshops',
        'Exclusive networking events'
      ]
    }
  ];

  return (
    <div className="service-page">
      <div className="service-header">
        <h1>Services for Academy Players</h1>
        <p className="service-tagline">Supporting your development on and off the pitch</p>
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

export default Academy; 