import React from 'react';
import logo1 from '../../images/logo drukowanie.png';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logos}>
        <img src={logo1} alt="Logo 1" className={styles.logo1} />
      </div>
      <p className={styles.disclaimer}>ul. Krzywoustego 1, 84-300 Lębork</p>
      <p className={styles.disclaimer}>
        Tel. właściciela serwisu (Stowarzyszenie EDUQ): 694 242 952{' '}
      </p>
      <p className={styles.disclaimer}>
        E-mail właściciela serwisu (Stowarzyszenie EDUQ): biuro@eduqlebork.pl
      </p>
      <p className={styles.disclaimer}>Tel. drukarni: 694 915 632</p>
      <p className={styles.disclaimer}>E-mail drukarni: druqeduq@gmail.com</p>
    </footer>
  );
}

export default Footer;
