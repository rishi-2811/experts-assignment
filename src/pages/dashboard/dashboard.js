import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">
           <img src='/logo-min.png' alt='logo'/>
        </div>
        <nav>
          <a href="/dashboard" className="nav-item active">Getting Started</a>
          <div className="nav-item">
            <span onClick={() => toggleDropdown('insights')}>
              Insights
               <span>{openDropdown === 'insights' ? '  ▲' : '  ▼'}</span>
            </span>
            {openDropdown === 'insights' && (
              <div className="dropdown-menu">
                <a href="/dashboard/insights/overview">Overview</a>
                <a href="/dashboard/insights/analytics">Analytics</a>
                <a href="/dashboard/insights/reports">Reports</a>
              </div>
            )}
          </div>
          <a href="/dashboard/contact" className="nav-item">Contacts</a>
          <a href="/dashboard/priority" className="nav-item">Priority Report</a>
          <div className="nav-item">
            <span onClick={() => toggleDropdown('channels')}>
              Channels
              <span>{openDropdown === 'channels' ? '▲' : '▼'}</span>
            </span>
            {openDropdown === 'channels' && (
              <div className="dropdown-menu">
                <a href="/dashboard/channel-sms">SMS</a>
                <a href="/dashboard/channel-voice">Voice</a>
                <a href="/dashboard/channel-email">Email</a>
              </div>
            )}
          </div>
          <div className="nav-item">
            <span onClick={() => toggleDropdown('buildFlow')}>
              Build Flow
              <span>{openDropdown === 'buildFlow' ? '▲' : '▼'}</span>
            </span>
            {openDropdown === 'buildFlow' && (
              <div className="dropdown-menu">
                <a href="/dashboard/createFlow">Create Flow</a>
                <a href="/dashboard/templates">Templates</a>
                <a href="/dashboard/flow-library">Flow Library</a>
              </div>
            )}
          </div>
          <a href="/dashboard/design" className="nav-item">Design Audit</a>
          <a href="/dashboard/integration" className="nav-item">Integrations</a>
          <a href="/dashboard/knowledge" className="nav-item">Knowledge Base</a>
        </nav>
      </aside>

      <div className="main-content">
        <header className="header">
          <nav className="header-nav">
            <a href="/dashboard" className="header-nav-item active">Dashboard</a>
          </nav>
          <div className="user-actions">
            <a href="/dashboard" className="header-nav-item">Help</a>
            <a href="/dashboard" className="header-nav-item">Balance</a>
            <button className="notification-btn">🔔</button>
            <div className="user-profile">P</div>
          </div>
        </header>

        <main className="dashboard-content">
          <section className='dashboard-1-content'>
          <section className="first-steps">
          <h1 className='first-steps-title'>First steps</h1>
            <div className="first-steps-content">
              <div>
              <h1>Good evening</h1>
              <p>Your dashboard is customized with resources, how-to's, and recommendations to help you get started</p>
              <button className="explore-btn">Explore Knowledge Center</button>
              </div>
            
                <div className="first-steps-image">
                    <img src='/home.png' alt='home'/>
                </div>
            </div>
          </section>

          <section className="helpful-tips">
            <h2>Helpful tips</h2>
            <div className='helpful-tips-content'>
            <div className="tip">
              <span className="tip-icon">💡</span>
              <span className="tip-text">Receive replies from your customers</span>
            </div>
            <div className="tip">
              <span className="tip-icon">📞</span>
              <span className="tip-text">Make phones ring</span>
            </div>
            </div>
          </section>
          </section>

          <section className="popular-solutions">
            <h2>Popular Dashboard Solutions</h2>
            <div className="solution-cards">
              <div className="solution-card">
                <p>Campaign Builder</p>
                <h3>Launch powerful SMS campaigns to your audience</h3>
                <span>Create, personalize, and launch SMS campaigns from a simple step-by-step editor.</span>
                <div className="card-actions">
                  <button>Start a new campaign</button>
                  <button>Quickly send SMS</button>
                </div>
              </div>
              <div className="solution-card">
                <p>WhatsApp</p>
                <h3>Chat with customers on WhatsApp</h3>
                <span>Automate notifications and provide support through our omni-channel inbox or WhatsApp API</span>
                <div className="card-actions">
                  <button>Get started</button>
                  <button>Test with sandbox</button>
                </div>
              </div>
              <div className="solution-card">
                <p>Flow Builder</p>
                <h3>Automate communication flows. No code required.</h3>
                <span>Design communication flows using inbound and outbound SMS, Voice, and more. Just drag & drop.</span>
                <div className="card-actions">
                  <button>Try a template flow</button>
                  <button>Create a custom flow</button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;