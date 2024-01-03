import React from 'react';
import styles from '../Header/Header.module.css';

const ProductsContainer = ({ isOpen, toggleDropdown }) => {
  return (
    <div
      className={`${styles.link} ${styles.productsContainer}`}
      onClick={toggleDropdown}
    >
      Produkty
      {isOpen && (
        <div className={styles.additionalDropdown}>
          <a
            href="https://drukeduq.pl/product/folia-samoprzylepna"
            className={`${styles.link} ${styles.linkWidth}`}
          >
            Folia samoprzylepna
          </a>
          <a
            href="https://drukeduq.pl/product/banery"
            className={`${styles.link} ${styles.linkWidth}`}
          >
            Banery
          </a>
          <a
            href="https://drukeduq.pl/product/fototapety"
            className={`${styles.link} ${styles.linkWidth}`}
          >
            Fototapety
          </a>
          <a
            href="https://drukeduq.pl/product/rollupy"
            className={`${styles.link} ${styles.linkWidth}`}
          >
            Rollupy
          </a>
          <a
            href="https://drukeduq.pl/product/x-baner"
            className={`${styles.link} ${styles.linkWidth}`}
          >
            X-baner
          </a>
        </div>
      )}
    </div>
  );
};

export default ProductsContainer;
