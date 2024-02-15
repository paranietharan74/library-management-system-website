import React, { useState, useEffect } from 'react';
import './style/VerticalProgressBar.css';

const VerticalProgressBar = ({ currentStep }) => {
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const activities = [
    { step: 1, label: 'Enter basic details' },
    { step: 2, label: 'Verify student identity' },
    { step: 3, label: 'Confirm email' }
  ];

  useEffect(() => {
    // Calculate progress based on the current step
    setProgress(currentStep * 33.33);

    // Update completed steps
    setCompletedSteps([...completedSteps, currentStep]);
  }, [currentStep]);

  return (
    <div className="vertical-progress-container">
      <div className="vertical-progress-bar" style={{ height: `${progress}%` }}></div>
      <div className="activity-markers">
        {activities.map(activity => (
          <div
            key={activity.step}
            className={`activity-marker ${completedSteps.includes(activity.step) ? 'completed' : ''}`}
          >
            {activity.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalProgressBar;