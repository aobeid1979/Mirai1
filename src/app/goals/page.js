import React from 'react';
import styles from './goal.module.css';

const Goal = () => {
  return (
    <div className={styles.goalContainer}>
      <h1 className={styles.goalTitle}>Our Vision: Redefining Art Exploration</h1>
      <p className={styles.goalText}>
        Welcome to MIRAI, where art meets innovation. Our goal is to create a transformative art platform that connects users with a diverse array of artwork, from established artists to emerging talents.
      </p>
      <p className={styles.goalText}>
        At MIRAI, we believe in empowering artists and enriching art appreciation through technology. By leveraging cutting-edge tools and a user-centric approach, we aim to redefine how people engage with art in the digital age.
      </p>
      <p className={styles.goalText}>
        Discover art that resonates with you on a deeper level. MIRAI offers a curated collection of artworks that cater to diverse tastes and interests, encouraging exploration and discovery.
      </p>
      <p className={styles.goalText}>
        Join us in embracing the future of art exploration. Let MIRAI be your guide to a world of creativity and inspiration!
      </p>
    </div>
  );
};

export default Goal;
