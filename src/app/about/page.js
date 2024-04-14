import React from 'react';
import styles from './aboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>About MIRAI</h1>
      <p className={styles.aboutText}>
        MIRAI aims to revolutionize the art consumption experience by providing a diverse collection of artwork accessible through a comprehensive database. Our platform allows users to explore and engage with digital art on various devices, ranging from smartphones and smartwatches to large screens like TVs.
      </p>
      <p className={styles.aboutText}>
        At MIRAI, we believe in creating a seamless bridge between artists and art enthusiasts. Our platform not only offers a digital gallery for users but also serves as a supportive space for artists to showcase their creations and connect with a global audience.
      </p>
      <p className={styles.aboutText}>
        Through innovative technology and a user-friendly interface, MIRAI seeks to break down barriers to art appreciation, making art an integral part of people's everyday lives.
      </p>
      <p className={styles.aboutText}>
        Join us in redefining the future of art consumption with MIRAI!
      </p>
    </div>
  );
};

export default AboutPage;
