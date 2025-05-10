import React, { useState } from "react";
import "./Profile.css";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

function PlayerProfile() {
  const [cvFile, setCvFile] = useState(null);
  const [selectedMood, setSelectedMood] = useState(null);
  const [profileData, setProfileData] = useState({
    name: "Jake Jones",
    age: 16,
    position: "Winger",
    experience: "Academy Player",
    skills: ["Leadership", "Communication", "Team Management"],
    interests: ["Coaching", "Sports Management", "Youth Development"]
  });
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const handleFileUpload = (event) => {
    setCvFile(event.target.files[0]);
  };

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  // Dummy data for the radar chart
  const data = [
    { skill: "Career Planning", score: 9 },
    { skill: "Mental Well-being", score: 8 },
    { skill: "Financial Literacy", score: 10 },
    { skill: "Networking", score: 8 },
    { skill: "Skill Development", score: 7 },
    { skill: "Leadership", score: 10 },
  ];

  const questions = [
    {
      id: 1,
      question: "I lead a purposeful and meaningful life.",
      options: [
        { value: 1, text: "Strongly Disagree" },
        { value: 2, text: "Disagree" },
        { value: 3, text: "Neither agree nor disagree" },
        { value: 4, text: "Agree" },
        { value: 5, text: "Strongly Agree" }
      ]
    },
    {
      id: 2,
      question: "My social relationships are supportive and rewarding.",
      options: [
        { value: 1, text: "Strongly Disagree" },
        { value: 2, text: "Disagree" },
        { value: 3, text: "Neither agree nor disagree" },
        { value: 4, text: "Agree" },
        { value: 5, text: "Strongly Agree" }
      ]
    },
    {
      id: 3,
      question: "I am engaged and interested in my daily activities.",
      options: [
        { value: 1, text: "Strongly Disagree" },
        { value: 2, text: "Disagree" },
        { value: 3, text: "Neither agree nor disagree" },
        { value: 4, text: "Agree" },
        { value: 5, text: "Strongly Agree" }
      ]
    },
    {
      id: 4,
      question: "I actively contribute to the happiness and well-being of others.",
      options: [
        { value: 1, text: "Strongly Disagree" },
        { value: 2, text: "Disagree" },
        { value: 3, text: "Neither agree nor disagree" },
        { value: 4, text: "Agree" },
        { value: 5, text: "Strongly Agree" }
      ]
    },
    {
      id: 5,
      question: "I am competent and capable in the activities that are important to me.",
      options: [
        { value: 1, text: "Strongly Disagree" },
        { value: 2, text: "Disagree" },
        { value: 3, text: "Neither agree nor disagree" },
        { value: 4, text: "Agree" },
        { value: 5, text: "Strongly Agree" }
      ]
    },
    {
      id: 6,
      question: "I am a good person and live a good life.",
      options: [
        { value: 1, text: "Strongly Disagree" },
        { value: 2, text: "Disagree" },
        { value: 3, text: "Neither agree nor disagree" },
        { value: 4, text: "Agree" },
        { value: 5, text: "Strongly Agree" }
      ]
    },
    {
      id: 7,
      question: "I am optimistic about my future.",
      options: [
        { value: 1, text: "Strongly Disagree" },
        { value: 2, text: "Disagree" },
        { value: 3, text: "Neither agree nor disagree" },
        { value: 4, text: "Agree" },
        { value: 5, text: "Strongly Agree" }
      ]
    },
    {
      id: 8,
      question: "People respect me.",
      options: [
        { value: 1, text: "Strongly Disagree" },
        { value: 2, text: "Disagree" },
        { value: 3, text: "Neither agree nor disagree" },
        { value: 4, text: "Agree" },
        { value: 5, text: "Strongly Agree" }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateScore = () => {
    const total = Object.values(answers).reduce((sum, value) => sum + value, 0);
    const average = total / questions.length;
    return Math.round(average * 20); // Convert to percentage
  };

  const getRecommendations = (score) => {
    if (score >= 80) {
      return "You're doing extremely well! Consider becoming a mentor for others.";
    } else if (score >= 60) {
      return "You're on the right track. Focus on building your support network.";
    } else if (score >= 40) {
      return "You need to start planning. Consider reaching out to mentors and exploring development courses.";
    } else {
      return "You need immediate support. Contact our team for support and guidance.";
    }
  };

  const weeklySchedule = [
    { day: 'Monday', activities: [
      { time: '10:00', title: 'Career Planning Call', type: 'call' },
      { time: '14:00', title: 'Financial Planning Workshop', type: 'workshop' }
    ]},
    { day: 'Tuesday', activities: [
      { time: '11:00', title: 'Mentor Meeting', type: 'meeting' },
      { time: '15:00', title: 'Networking Event', type: 'event' }
    ]},
    { day: 'Wednesday', activities: [
      { time: '09:00', title: 'Coaching Session', type: 'session' },
      { time: '13:00', title: 'Career Assessment', type: 'assessment' }
    ]},
    { day: 'Thursday', activities: [
      { time: '10:30', title: 'Industry Expert Call', type: 'call' },
      { time: '14:30', title: 'Skill Development Workshop', type: 'workshop' }
    ]},
    { day: 'Friday', activities: [
      { time: '11:30', title: 'Progress Review', type: 'meeting' },
      { time: '15:30', title: 'Networking Call', type: 'call' }
    ]},
    { day: 'Saturday', activities: [
      { time: '10:00', title: 'Wellness Session', type: 'session' },
      { time: '14:00', title: 'Personal Development', type: 'workshop' }
    ]},
    { day: 'Sunday', activities: [
      { time: '11:00', title: 'Reflection Time', type: 'assessment' },
      { time: '15:00', title: 'Planning for Next Week', type: 'meeting' }
    ]}
  ];

  const achievementBadges = [
    { id: 1, name: 'Career Explorer', icon: '🎯', description: 'Completed career assessment', earned: true },
    { id: 2, name: 'Network Builder', icon: '🤝', description: 'Connected with 10+ professionals', earned: true },
    { id: 4, name: 'Financial Guru', icon: '💰', description: 'Completed financial planning module', earned: true },
    { id: 5, name: 'Mentor', icon: '👥', description: 'Became a mentor to another player', earned: true }
  ];

  const quizQuestions = [
    {
      question: "How confident are you in your career planning?",
      options: ["Not confident", "Somewhat confident", "Confident", "Very confident"]
    },
    {
      question: "How prepared are you for life after football?",
      options: ["Not prepared", "Somewhat prepared", "Prepared", "Very prepared"]
    },
    {
      question: "How strong is your professional network?",
      options: ["Weak", "Developing", "Strong", "Very strong"]
    },
    {
      question: "How well do you understand financial planning?",
      options: ["Not well", "Somewhat well", "Well", "Very well"]
    },
    {
      question: "How developed are your transferable skills?",
      options: ["Not developed", "Somewhat developed", "Developed", "Very developed"]
    }
  ];

  const handleQuizAnswer = (answer) => {
    const newAnswers = [...quizAnswers, answer];
    setQuizAnswers(newAnswers);
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const score = newAnswers.reduce((acc, answer) => acc + answer, 0);
      setQuizScore(score);
      setQuizCompleted(true);
    }
  };

  const barData = {
    labels: ['Career Planning', 'Life After Football', 'Professional Network', 'Financial Planning', 'Transferable Skills'],
    datasets: [
      {
        label: 'Your Progress',
        data: quizCompleted ? quizAnswers.map(answer => (answer + 1) * 25) : [0, 0, 0, 0, 0],
        backgroundColor: 'rgba(168, 218, 220, 0.8)',
        borderColor: '#a8dadc',
        borderWidth: 1,
      }
    ]
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: 'white',
          font: {
            size: 12
          }
        },
        grid: {
          color: 'rgba(168, 218, 220, 0.2)'
        }
      },
      x: {
        ticks: {
          color: 'white',
          font: {
            size: 12
          }
        },
        grid: {
          color: 'rgba(168, 218, 220, 0.2)'
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-content">
        {/* Top Section with Personal Info, Skills, Interests, Achievements, and CV */}
        <div className="profile-section">
          <div className="profile-header">
            <div className="profile-main">
              <div className="profile-info">
                <h1>{profileData.name}</h1>
                <div className="profile-details">
                  <span>{profileData.position}</span>
                  <span>|</span>
                  <span>{profileData.age} years old</span>
                </div>
                <div className="profile-experience">
                  {profileData.experience} | Chelsea FC 
                </div>
                <div className="goals-section">
                  <h3>My Goals</h3>
                  <div className="goals-list">
                    <div className="goal-item">
                      <div className="goal-icon">🎯</div>
                      <div className="goal-content">
                        <p>Find a part-time job</p>
                        <div className="progress-bar">
                          <div className="progress" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="goal-item">
                      <div className="goal-icon">🤝</div>
                      <div className="goal-content">
                        <p>Get 100 connections</p>
                        <div className="progress-bar">
                          <div className="progress" style={{ width: '45%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="goal-item">
                      <div className="goal-icon">💼</div>
                      <div className="goal-content">
                        <p>Create a sports business</p>
                        <div className="progress-bar">
                          <div className="progress" style={{ width: '20%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-badges">
                <div className="badges-grid">
                  {achievementBadges.map((badge) => (
                    <div key={badge.id} className={`badge-card ${badge.earned ? 'earned' : ''}`}>
                      <div className="badge-icon">{badge.icon}</div>
                      <h4>{badge.name}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="profile-skills">
            <div className="skills-section">
              <h3>Skills</h3>
              <div className="tags">
                {profileData.skills.map((skill, index) => (
                  <span key={index} className="tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="interests-section">
              <h3>Interests</h3>
              <div className="tags">
                {profileData.interests.map((interest, index) => (
                  <span key={index} className="tag">{interest}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="cv-section">
            <h3>CV Upload</h3>
            <div className="cv-upload">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="cv-input"
                id="cv-input"
              />
              <label htmlFor="cv-input" className="upload-btn">
                Upload CV
              </label>
            </div>
            {cvFile && (
              <div className="cv-preview">
                <p>📄 {cvFile.name}</p>
                <button className="view-button">View</button>
              </div>
            )}

            {/* Well-being Check-in moved here */}
            <div className="well-being-section">
              <h3>Well-being Check-in</h3>
              <div className="mood-tracker">
                <div className="mood-options">
                  <span 
                    className={`mood-option ${selectedMood === 'happy' ? 'selected' : ''}`}
                    onClick={() => handleMoodSelect('happy')}
                  >😃</span>
                  <span 
                    className={`mood-option ${selectedMood === 'good' ? 'selected' : ''}`}
                    onClick={() => handleMoodSelect('good')}
                  >🙂</span>
                  <span 
                    className={`mood-option ${selectedMood === 'okay' ? 'selected' : ''}`}
                    onClick={() => handleMoodSelect('okay')}
                  >😐</span>
                  <span 
                    className={`mood-option ${selectedMood === 'sad' ? 'selected' : ''}`}
                    onClick={() => handleMoodSelect('sad')}
                  >☹️</span>
                  <span 
                    className={`mood-option ${selectedMood === 'very-sad' ? 'selected' : ''}`}
                    onClick={() => handleMoodSelect('very-sad')}
                  >😢</span>
                </div>
                {selectedMood && (
                  <div className="mood-note">
                    <textarea placeholder="How are you feeling today?" />
                    <button className="save-mood">Save</button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="radar-section">
            <h3>Transition Readiness</h3>
            <div className="radar-chart">
              <ResponsiveContainer width="100%" height={200}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="skill" />
                  <Radar name="Readiness" dataKey="score" stroke="#1E90FF" fill="#1E90FF" fillOpacity={0.6} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Flourishing Scale Assessment */}
        <div className="profile-section">
          <h2 className="assessment-heading">Flourishing Scale Assessment</h2>
          {!showResults ? (
            <div className="questionnaire">
              {questions.map((question, index) => (
                <div key={index} className="question">
                  <p>{question.question}</p>
                  <div className="options">
                    {question.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        className={`option-btn ${answers[question.id] === option.value ? 'selected' : ''}`}
                        onClick={() => handleAnswer(question.id, option.value)}
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button
                className="submit-btn"
                onClick={() => setShowResults(true)}
                disabled={Object.keys(answers).length !== questions.length}
              >
                Get Results
              </button>
            </div>
          ) : (
            <div className="results">
              <h3>Your Flourishing Score: {calculateScore()}%</h3>
              <p className="recommendation">{getRecommendations(calculateScore())}</p>
              <button className="retry-btn" onClick={() => {
                setAnswers({});
                setShowResults(false);
              }}>
                Retake Assessment
              </button>
            </div>
          )}
        </div>

        {/* Weekly Schedule */}
        <div className="profile-section">
          <h2>Weekly Schedule</h2>
          <div className="schedule-grid">
            {weeklySchedule.map((day) => (
              <div key={day.day} className="schedule-day">
                <h3>{day.day}</h3>
                <div className="activities">
                  {day.activities.map((activity, index) => (
                    <div key={index} className={`activity ${activity.type}`}>
                      <span className="time">{activity.time}</span>
                      <span className="title">{activity.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerProfile;
