// Import necessary hooks and styles
import React from 'react';
import styles from '../Header/Header.module.css';

const HelpContainer = ({ isOpen, toggleDropdown }) => {
  return (
    <div
      className={`${styles.link} ${styles.helpContainer}`}
      onClick={toggleDropdown}
    >
      Pomoc
      {isOpen && (
        <div className={styles.additionalDropdown}>
          <a
            href="https://drukeduq.pl/page/opcje-platnosci-i-dostawy"
            className={`${styles.link} ${styles.linkWidth}`}
          >
            Opcje platnosci i dostawy
          </a>
          <a
            href="https://drukeduq.pl/page/terminy-realizacji"
            className={`${styles.link} ${styles.linkWidth}`}
          >
            Terminy realizacji
          </a>
        </div>
      )}
    </div>
  );
};

export default HelpContainer;
