
import React, { useEffect, useState } from 'react';
import './stats.css';

const ImpactSection: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 200);

    
    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <section className="impact-section">
      <div className="impact-block1">
        <span>+{count}M</span>
        <p>
          Lives impacted <br></br> annually in 1800+ sites <br></br> across 80+ countries
          <br />
          <a href="#view-impact">View Impact Stories →</a>
        </p>
      </div>

      <div className="impact-block2">
        <span>40%</span>
        <p>
          Reduction in <br></br> turnaround time using <br></br> normal-abnormal triage
          <br />
          <a href="#read-products">Read about our products →</a>
        </p>
      </div>

      <div className="impact-block3">
        <span>+1B</span>
        <p>
          Unprecedented data <br></br> set to train the industry <br></br> leading algorithms
          <br />
          <a href="#read-evidence">Read our Evidence →</a>
        </p>
      </div>
    </section>
  );
};

export default ImpactSection;
