import React from 'react';
import { FaMoneyBillWave, FaSeedling, FaCompass, FaBrain, FaHeartbeat } from 'react-icons/fa';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import './OurResearch.css';

function OurResearch() {
  // Data for academy players pie chart
  const academyPlayersData = [
    { name: 'Reported Cases', value: 55, showLabel: true },
    { name: '', value: 45, showLabel: false }
  ];
  
  // Data for retired players pie chart
  const retiredPlayersData = [
    { name: 'Reported Cases', value: 39, showLabel: true },
    { name: '', value: 61, showLabel: false }
  ];
  
  // Colors for the pie charts
  const COLORS = ['#a8dadc', '#1B263B'];

  const pieChartData = {
    labels: ['Sport-Related', 'Other'],
    datasets: [{
      data: [55, 39],  // Updated percentages
      backgroundColor: ['#1B263B', '#415A77'],
      borderWidth: 0
    }]
  };

  return (
    <div className="research-page">
      <div className="research-header">
        <h1>Our Research</h1>
        <p>Evidence-based insights driving our mission</p>
      </div>
      
      <div className="stats-container">
        <div className="stat-section">
          <div className="stat-header">
            <h2>Financial Issues</h2>
            <div className="icon-container">
              <FaMoneyBillWave className="stat-icon" />
            </div>
          </div>
          <div className="stat-content">
            <div className="stat-number">40%</div>
            <p className="stat-description">
            of professional footballers go bankrupt after five years of retirement (Maltby 2021).
            </p>
          </div>
        </div>

        <div className="stat-section">
          <div className="stat-header">
            <h2>life after sport</h2>
            <div className="icon-container">
              <FaCompass className="stat-icon" />
            </div>
          </div>
          <div className="stat-content">
            <p className="stat-description">
            Among retired footballers, 54% experience an identity crisis, 72% report difficulty adjusting to normal life and 45% feel unprepared for life after sport (Enoh 2025). 
            </p>
          </div>
        </div>

        <div className="stat-section">
          <div className="stat-header">
            <h2>lack of support</h2>
            <div className="icon-container">
              <FaSeedling className="stat-icon" />
            </div>
          </div>
          <div className="stat-content">
            <div className="stat-number">50%</div>
            <p className="stat-description">
            of academy players leave the system before the age of 16 with no support (McGlinchey et al. 2022)
            </p>
          </div>
        </div>

        <div className="stat-section">
          <div className="stat-header">
            <h2>MENTAL HEALTH CRISIS</h2>
            <div className="icon-container">
              <FaBrain className="stat-icon" />
            </div>
          </div>
          <div className="stat-content">
            <p className="stat-description">
              Percentage of released academy players and retired players that experience issues with their mental health outside of football.
            </p>
            
            <div className="pie-charts-container">
              <div className="pie-chart-wrapper">
                <h3 className="chart-title">Academy Players</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={academyPlayersData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, showLabel }) => {
                        if (!showLabel) return null;
                        const RADIAN = Math.PI / 180;
                        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);
                        
                        return (
                          <text 
                            x={x} 
                            y={y} 
                            fill=""
                            textAnchor="middle" 
                            dominantBaseline="central"
                            fontSize="24px"
                            fontWeight="bold"
                          >
                            {`${(percent * 100).toFixed(0)}%`}
                          </text>
                        );
                      }}
                    >
                      {academyPlayersData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => `${value} cases`}
                      contentStyle={{
                        backgroundColor: '#1B263B',
                        borderColor: '#a8dadc',
                        color: 'white'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="pie-chart-wrapper">
                <h3 className="chart-title">Retired Players</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={retiredPlayersData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, showLabel }) => {
                        if (!showLabel) return null;
                        const RADIAN = Math.PI / 180;
                        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);
                        
                        return (
                          <text 
                            x={x} 
                            y={y} 
                            fill="#1B263B"
                            textAnchor="middle" 
                            dominantBaseline="central"
                            fontSize="24px"
                            fontWeight="bold"
                          >
                            {`${(percent * 100).toFixed(0)}%`}
                          </text>
                        );
                      }}
                    >
                      {retiredPlayersData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => `${value} cases`}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <p className="stat-description stat-source">
              Source: van Remele et al. (2017) and Kingland (2021)
            </p>
          </div>
        </div>
      </div>

      <div className="research-summary">
        <h2>Key Findings</h2>
        <div className="findings-grid">
          <div className="finding-card">
            <h3>Career Planning</h3>
            <p>Early career planning significantly improves transition outcomes</p>
          </div>
          <div className="finding-card">
            <h3>Financial Literacy</h3>
            <p>Financial education leads to better long-term financial security</p>
          </div>
          <div className="finding-card">
            <h3>Mental Health</h3>
            <p>Support networks are crucial for mental well-being during transition</p>
          </div>
          <div className="finding-card">
            <h3>Education</h3>
            <p>Continuous learning increases career opportunities post-retirement</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurResearch;