import React from 'react';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contact Us</h1>
      <p className={styles.contactText}>
        Have a question or suggestion? We'd love to hear from you! Reach out to the MIRAI team via email or phone for prompt assistance and to share your valuable feedback.
      </p>
      <h2 className={styles.contactTitle}>Email Us</h2>
      <p className={styles.contactText}>
        Send us an email at <a className={styles.emailLink} href="mailto:contact@email.com">contact@email.com</a> to connect with our support team. We're here to address your inquiries and listen to your suggestions.
      </p>
      <h2 className={styles.contactTitle}>Call Us</h2>
      <p className={styles.contactText}>
        For immediate assistance, call us at <strong>046 72 00 75 598</strong>. Our dedicated team is ready to assist you with any questions or feedback you may have about the MIRAI platform.
      </p>
      <p className={styles.contactText}>
        We look forward to hearing from you and continuously improving MIRAI based on your insights!
      </p>
    </div>
  );
};

export default Contact;
