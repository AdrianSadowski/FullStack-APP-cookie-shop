import React from 'react';
import ContactForm from '../../features/ContactForm/ContactForm';
import SectionHeader from '../../features/SectionHeader/SectionHeader';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.root}>
      <SectionHeader name='Kontakt' />
      <div className={styles.contactForm}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
