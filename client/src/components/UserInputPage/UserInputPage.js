import './UserInputPage.css';
import { useState } from 'react';

function UserInputPage({ onComplete }) {
  const [currentSituation, setCurrentSituation] = useState('');
  const [futureGoals, setFutureGoals] = useState('');
  const [riskLevel, setRiskLevel] = useState(null);

  const riskOptions = [
    {
      id: 'low',
      label: 'Low',
      description: 'Preserve what I have',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 12L10.5 14.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'medium',
      label: 'Medium',
      description: 'Balanced approach',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'high',
      label: 'High',
      description: 'Maximize growth',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const isFormValid = currentSituation.trim() && futureGoals.trim() && riskLevel;

  const handleSubmit = () => {
    if (isFormValid) {
      onComplete({
        currentSituation: currentSituation.trim(),
        futureGoals: futureGoals.trim(),
        riskLevel
      });
    }
  };

  return (
    <div className="user-input-page">
      <div className="user-input-container">
        {/* Header */}
        <div className="user-input-header">
          <div className="header-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="user-input-title">Tell Us About You</h1>
          <p className="user-input-subtitle">Help us understand your journey so we can guide you better</p>
        </div>

        {/* Current Situation Input */}
        <div className="input-section">
          <label className="input-label">
            <span className="label-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            Where are you now?
          </label>
          <textarea
            className="input-textarea"
            placeholder="Describe your current financial situation... (e.g., I have some savings but also student loans, just started my first job...)"
            value={currentSituation}
            onChange={(e) => setCurrentSituation(e.target.value)}
            rows={4}
          />
        </div>

        {/* Future Goals Input */}
        <div className="input-section">
          <label className="input-label">
            <span className="label-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Where do you want to be?
          </label>
          <textarea
            className="input-textarea"
            placeholder="Describe your financial goals... (e.g., I want to be debt-free, save for a house, and have a comfortable retirement...)"
            value={futureGoals}
            onChange={(e) => setFutureGoals(e.target.value)}
            rows={4}
          />
        </div>

        {/* Risk Level Selector */}
        <div className="input-section">
          <label className="input-label risk-label">
            <span className="label-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            What's your risk tolerance?
          </label>
          
          <div className="risk-selector">
            {riskOptions.map((option) => (
              <button
                key={option.id}
                className={`risk-option ${riskLevel === option.id ? 'selected' : ''}`}
                onClick={() => setRiskLevel(option.id)}
                type="button"
              >
                <span className="risk-icon">{option.icon}</span>
                <span className="risk-label-text">{option.label}</span>
                <span className="risk-description">{option.description}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button 
          className={`ascend-button ${!isFormValid ? 'disabled' : ''}`}
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          <span className="button-text">Ascend</span>
          <span className="button-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19V5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

export default UserInputPage;
