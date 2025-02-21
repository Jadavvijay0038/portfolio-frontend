import { useState, useEffect } from "react";
import styles from "./ComingSoon.module.css";

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-06-01").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference < 0) return {};

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <h1>🚀 Coming Soon!</h1>
      <p>We are working hard to bring something amazing.</p>
      <div className={styles.countdown}>
        {Object.keys(timeLeft).length > 0 ? (
          <>
            <span>{timeLeft.days}d</span>:<span>{timeLeft.hours}h</span>:
            <span>{timeLeft.minutes}m</span>:<span>{timeLeft.seconds}s</span>
          </>
        ) : (
          <span>Launching Soon!</span>
        )}
      </div>
    </div>
  );
};

export default ComingSoon;
