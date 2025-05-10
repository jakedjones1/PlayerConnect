import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType: '',
    position: '',
    experience: '',
    location: '',
    skills: [],
    interests: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Handle final submission
      navigate('/profile');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Join Player Connect</h1>
        <div className="progress-bar">
          <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>1</div>
          <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>2</div>
          <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>3</div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="form-step">
              <h2>Basic Information</h2>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="form-step">
              <h2>Player Profile</h2>
              <div className="form-group">
                <label>I am a</label>
                <select
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="academy">Academy Player</option>
                  <option value="retired">Retired Player</option>
                  <option value="club">Club Representative</option>
                </select>
              </div>
              <div className="form-group">
                <label>Position</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="form-step">
              <h2>Skills & Interests</h2>
              <div className="form-group">
                <label>Skills</label>
                <div className="tags-input">
                  <input
                    type="text"
                    placeholder="Add skills (press enter)"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && e.target.value) {
                        e.preventDefault();
                        setFormData(prev => ({
                          ...prev,
                          skills: [...prev.skills, e.target.value]
                        }));
                        e.target.value = '';
                      }
                    }}
                  />
                  <div className="tags">
                    {formData.skills.map((skill, index) => (
                      <span key={index} className="tag">
                        {skill}
                        <button
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({
                              ...prev,
                              skills: prev.skills.filter((_, i) => i !== index)
                            }));
                          }}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Interests</label>
                <div className="tags-input">
                  <input
                    type="text"
                    placeholder="Add interests (press enter)"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && e.target.value) {
                        e.preventDefault();
                        setFormData(prev => ({
                          ...prev,
                          interests: [...prev.interests, e.target.value]
                        }));
                        e.target.value = '';
                      }
                    }}
                  />
                  <div className="tags">
                    {formData.interests.map((interest, index) => (
                      <span key={index} className="tag">
                        {interest}
                        <button
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({
                              ...prev,
                              interests: prev.interests.filter((_, i) => i !== index)
                            }));
                          }}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="form-actions">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="secondary-button"
              >
                Back
              </button>
            )}
            <button type="submit" className="primary-button">
              {step === 3 ? 'Complete Registration' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp; 