import React from "react";
import "./ServicePage.css";
import careerTransitionIcon from '../../assets/images/service-icons/career-transition.jpeg';
import businessDevelopmentIcon from '../../assets/images/service-icons/business-development.jpeg';
import coachingPathwaysIcon from '../../assets/images/service-icons/coaching-pathways.avif';
import financialPlanningIcon from '../../assets/images/service-icons/financial-planning.jpeg';
import mediaBroadcastingIcon from '../../assets/images/service-icons/media-broadcasting.jpeg';
import communityLeadershipIcon from '../../assets/images/service-icons/community-leadership.jpeg';

const Retired = () => {
  const services = [
    {
      id: 1,
      title: 'Career Transition',
      description: 'Comprehensive support and guidance for your next career chapter after professional football.',
      icon: careerTransitionIcon,
      features: [
        'Career assessment tools',
        'Industry placement support',
        'Interview preparation'
      ]
    },
    {
      id: 2,
      title: 'Business Development',
      description: 'Resources and support to help you launch and grow your own business ventures.',
      icon: businessDevelopmentIcon,
      features: [
        'Business planning workshops',
        'Marketing strategy support',
        'Frameworks to implement'
      ]
    },
    {
      id: 3,
      title: 'Pathways in Football',
      description: 'Support and resources to help you transition into coaching and player development roles.',
      icon: coachingPathwaysIcon,
      features: [
        'FA coaching courses',
        'Practical experience opportunities',
        'Explore various roles within football'
      ]
    },
    {
      id: 4,
      title: 'Financial Planning',
      description: 'Expert guidance to help you manage and grow your wealth post-retirement.',
      icon: financialPlanningIcon,
      features: [
        'Investment strategies',
        'Preserving wealth workshops',
        'Estate planning'
      ]
    },
    {
      id: 5,
      title: 'Media & Broadcasting',
      description: 'Opportunities and training to develop a career in sports media and broadcasting.',
      icon: mediaBroadcastingIcon,
      features: [
        'Media training workshops',
        'Punditry opportunities',
        'Industry networking'
      ]
    },
    {
      id: 6,
      title: 'Networking Events',
      description: 'Networking events to connect with ex-footballers and industry leaders.',
      icon: communityLeadershipIcon,
      features: [
        'Exclusive networking events for retired players',
        'Opportunities to socialise with like-minded individuals',
        'Network with industry leading professionals'
      ]
    }
  ];

  return (
    <div className="service-page">
      <div className="service-header">
        <h1>Services for Retired Players</h1>
        <p className="service-tagline">Supporting your transition and growth beyond the pitch</p>
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

export default Retired; 