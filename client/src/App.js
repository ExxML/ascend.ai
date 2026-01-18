import { useState } from 'react';
import './App.css';

const API_URL = 'http://localhost:5001/api';

// Options for dropdowns
const AGE_RANGES = ['18-24', '25-29', '30-34', '35-44', '45-54', '55-64', '65-74', '75+'];
const MONEY_RANGES = ['prefer_not_to_say', '$0', '<$5k', '$5k-$10k', '$10k-$25k', '$25k-$50k', '$50k-$100k', '$100k-$250k', '$250k-$500k', '$500k-$1m', '$1m+'];
const SALARY_RANGES = ['prefer_not_to_say', '<$1k', '$1k-$2k', '$2k-$3k', '$3k-$4k', '$4k-$5k', '$5k-$6k', '$6k-$7k', '$7k+'];
const RISK_OPTIONS = ['risky', 'medium', 'reliable'];

function App() {
  // Profile state
  const [profile, setProfile] = useState({
    age_range: '25-29',
    location: 'Seattle, WA',
    property_value: 'prefer_not_to_say',
    vehicle_value: 'prefer_not_to_say',
    investments: '$5k-$10k',
    debt: '$25k-$50k',
    monthly_salary: '$4k-$5k',
    has_dependents: false,
    employment_stability: 0.7
  });

  // Query state
  const [query, setQuery] = useState({
    risk_tolerance: 'medium',
    current_situation: 'Just started a new job, have student loans',
    goal: 'Pay off debt and start investing for the future'
  });

  // Results state
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleProfileChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleQueryChange = (field, value) => {
    setQuery(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_URL}/recommend`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...profile, ...query })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 Ascend Engine Tester</h1>
      </header>

      <main className="App-main">
        <div className="input-section">
          {/* Profile Inputs */}
          <div className="card">
            <h2>📋 Profile (One-time)</h2>
            
            <div className="form-group">
              <label>Age Range</label>
              <select value={profile.age_range} onChange={e => handleProfileChange('age_range', e.target.value)}>
                {AGE_RANGES.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label>Monthly Salary</label>
              <select value={profile.monthly_salary} onChange={e => handleProfileChange('monthly_salary', e.target.value)}>
                {SALARY_RANGES.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label>Total Debt</label>
              <select value={profile.debt} onChange={e => handleProfileChange('debt', e.target.value)}>
                {MONEY_RANGES.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label>Investments</label>
              <select value={profile.investments} onChange={e => handleProfileChange('investments', e.target.value)}>
                {MONEY_RANGES.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label>Property Value</label>
              <select value={profile.property_value} onChange={e => handleProfileChange('property_value', e.target.value)}>
                {MONEY_RANGES.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label>Vehicle Value</label>
              <select value={profile.vehicle_value} onChange={e => handleProfileChange('vehicle_value', e.target.value)}>
                {MONEY_RANGES.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label>Location</label>
              <input 
                type="text" 
                value={profile.location} 
                onChange={e => handleProfileChange('location', e.target.value)}
              />
            </div>

            <div className="form-group checkbox">
              <label>
                <input 
                  type="checkbox" 
                  checked={profile.has_dependents} 
                  onChange={e => handleProfileChange('has_dependents', e.target.checked)}
                />
                Has Dependents
              </label>
            </div>

            <div className="form-group">
              <label>Employment Stability: {profile.employment_stability}</label>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.1"
                value={profile.employment_stability} 
                onChange={e => handleProfileChange('employment_stability', parseFloat(e.target.value))}
              />
            </div>
          </div>

          {/* Query Inputs */}
          <div className="card">
            <h2>🎯 Query (Per-request)</h2>
            
            <div className="form-group">
              <label>Risk Tolerance</label>
              <select value={query.risk_tolerance} onChange={e => handleQueryChange('risk_tolerance', e.target.value)}>
                {RISK_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label>Current Situation</label>
              <textarea 
                value={query.current_situation} 
                onChange={e => handleQueryChange('current_situation', e.target.value)}
                rows={3}
              />
            </div>

            <div className="form-group">
              <label>Goal</label>
              <textarea 
                value={query.goal} 
                onChange={e => handleQueryChange('goal', e.target.value)}
                rows={3}
              />
            </div>

            <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
              {loading ? '⏳ Processing...' : '🔍 Get Recommendations'}
            </button>
          </div>
        </div>

        {/* Results Section */}
        <div className="results-section">
          {error && (
            <div className="card error">
              <h2>❌ Error</h2>
              <p>{error}</p>
              <p className="hint">Make sure the API is running: <code>python engine/api.py</code></p>
            </div>
          )}

          {results && (
            <>
              {/* Profile Summary */}
              <div className="card">
                <h2>📊 Profile Analysis</h2>
                <div className="summary-grid">
                  <div className="summary-item">
                    <span className="label">Life Stage</span>
                    <span className="value">{results.metadata?.profile_summary?.life_stage}</span>
                  </div>
                  <div className="summary-item">
                    <span className="label">Financial Health</span>
                    <span className="value">{results.metadata?.profile_summary?.financial_health}/5</span>
                  </div>
                  <div className="summary-item">
                    <span className="label">Net Worth</span>
                    <span className="value">${results.metadata?.profile_summary?.net_worth?.toLocaleString()}</span>
                  </div>
                  <div className="summary-item">
                    <span className="label">Debt-to-Income</span>
                    <span className="value">{(results.metadata?.profile_summary?.debt_to_income_ratio * 100)?.toFixed(0)}%</span>
                  </div>
                  <div className="summary-item">
                    <span className="label">Goal Category</span>
                    <span className="value">{results.metadata?.profile_summary?.goal_category?.replace('_', ' ')}</span>
                  </div>
                  <div className="summary-item">
                    <span className="label">Processing Time</span>
                    <span className="value">{results.metadata?.processing_time_ms?.toFixed(1)}ms</span>
                  </div>
                </div>
                <div className="priorities">
                  <strong>Top Priorities:</strong> {results.metadata?.profile_summary?.top_priorities?.join(', ')}
                </div>
              </div>

              {/* Recommendations by Horizon */}
              {['immediate', 'short_term', 'medium_term', 'long_term'].map(horizon => (
                results[horizon]?.length > 0 && (
                  <div className="card" key={horizon}>
                    <h2>
                      {horizon === 'immediate' && '⚡ Immediate'}
                      {horizon === 'short_term' && '📅 Short-Term (1-6 months)'}
                      {horizon === 'medium_term' && '📆 Medium-Term (6-24 months)'}
                      {horizon === 'long_term' && '🎯 Long-Term (2-10 years)'}
                    </h2>
                    <div className="recommendations">
                      {results[horizon].map((rec, idx) => (
                        <div className="recommendation" key={idx}>
                          <div className="rec-header">
                            <span className="score">{rec.score?.toFixed(0)}</span>
                            <span className="name">{rec.name}</span>
                            <span className="category">{rec.category}</span>
                          </div>
                          <p className="description">{rec.description}</p>
                          {rec.reasoning?.length > 0 && (
                            <ul className="reasoning">
                              {rec.reasoning.slice(0, 3).map((r, i) => (
                                <li key={i}>{r}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}

              {/* Raw JSON */}
              <div className="card">
                <h2>🔧 Raw JSON Response</h2>
                <pre className="json-output">{JSON.stringify(results, null, 2)}</pre>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
