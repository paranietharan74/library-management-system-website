import React, { useState, useEffect } from 'react';
import styles from './style/VerticalProgressBar.module.css';

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
    setProgress(currentStep * 50);

    const updatedCompletedSteps = activities.filter(activity => activity.step <= currentStep).map(activity => activity.step);
    setCompletedSteps(updatedCompletedSteps);
  }, [currentStep, completedSteps]); // Include completedSteps in the dependency array


  return (
    <div className={styles["vertical-progress-container"]}>
      <div className={styles["vertical-progress-bar"]} style={{ height: `${progress}%` }}></div>
      <div className={styles["activity-markers"]}>
        {activities.map(activity => (
          <div
            key={activity.step}
            className={`${styles["activity-marker"]} ${completedSteps.includes(activity.step) ? styles["completed"] : ''}`}
          >
            {activity.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalProgressBar;
