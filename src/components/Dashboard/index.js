import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const channels = [
  {
    id: 1,
    name: 'Channel 1',
  },
  {
    id: 2,
    name: 'Channel 2',
  },
  {
    id: 3,
    name: 'Channel 3',
  },
];

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-sidebar">
        {channels.map((c, index) => (
          <div className="link">
            <Link key={index} to={`/chat/${c.id}`}>
              {c.name}
            </Link>
          </div>
        ))}
      </div>
      
      <div className="dashboard-body">{children}</div>
    </div>
  );
};

export default Dashboard;
