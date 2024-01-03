import React, { useState, useEffect } from 'react';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import HelpContainer from '../HelpContainer/HelpContainer';

import logo1 from '../../images/logo drukowanie.png';
import logo4 from '../../images/eduq-logo-removebg-preview.png';

import styles from './Header.module.css';
import { useMedia } from '../../hooks/useMedia';

function Header() {
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [helpDropdownOpen, setHelpDropdownOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isBetweenWidths481And1279 = useMedia(
    ['(min-width: 481px) and (max-width: 1279px)'],
    [true],
    false
  );
  const isFromWidth1280 = useMedia(['(min-width: 1280px)'], [true], false);
  const isUpToWidth480 = useMedia(['(max-width: 480px)'], [true], false);

  useEffect(() => {
    const handleOutsideClick = event => {
      if (!event.target.closest(`.${styles.productsContainer}`)) {
        setProductsDropdownOpen(false);
      }
      if (!event.target.closest(`.${styles.helpContainer}`)) {
        setHelpDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <header className={styles.header}>
      {dropdownOpen && (
        <div
          className={`${styles.backdrop} ${
            dropdownOpen ? styles.activeBackdrop : ''
          }`}
          onClick={() => setDropdownOpen(false)}
        ></div>
      )}
      <div className={styles.logos}>
        <img
          src={logo1}
          alt="Logo 1"
          className={`${styles.logo1} ${styles.logo}`}
        />
      </div>

      <nav className={styles.nav}>
        {isFromWidth1280 && (
          <div className={styles.naContent}>
            <ProductsContainer
              isOpen={productsDropdownOpen}
              toggleDropdown={() =>
                setProductsDropdownOpen(!productsDropdownOpen)
              }
            />
            <a href="https://drukeduq.pl/index/login" className={styles.link}>
              Moje konto
            </a>
            <HelpContainer
              isOpen={helpDropdownOpen}
              toggleDropdown={() => setHelpDropdownOpen(!helpDropdownOpen)}
            />
            <a
              href="https://drukeduq.pl/page/regulamin_1"
              className={styles.link}
            >
              Regulamin
            </a>
            <a href="https://drukeduq.pl/page/kontakt" className={styles.link}>
              Kontakt
            </a>
          </div>
        )}
        {isUpToWidth480 && (
          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`${styles.burgerMenuIcon} ${styles.link}`}
          >
            ☰
            {dropdownOpen && (
              <div className={styles.dropdownContent}>
                <a
                  href="https://drukeduq.pl/index/login"
                  className={styles.link}
                >
                  Moje konto
                </a>
                <a
                  href="https://drukeduq.pl/page/regulamin_1"
                  className={styles.link}
                >
                  Regulamin
                </a>
                <a
                  href="https://drukeduq.pl/page/kontakt"
                  className={styles.link}
                >
                  Kontakt
                </a>
              </div>
            )}
          </div>
        )}
        {isBetweenWidths481And1279 && (
          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`${styles.menuDropdown} ${styles.link}`}
          >
            Menu
            {dropdownOpen && (
              <div className={styles.dropdownContent}>
                <a
                  href="https://drukeduq.pl/index/login"
                  className={styles.link}
                >
                  Moje konto
                </a>
                <a
                  href="https://drukeduq.pl/page/regulamin_1"
                  className={styles.link}
                >
                  Regulamin
                </a>
                <a
                  href="https://drukeduq.pl/page/kontakt"
                  className={styles.link}
                >
                  Kontakt
                </a>
              </div>
            )}
          </div>
        )}
      </nav>
      <div className={styles.logos}>
        <img
          src={logo4}
          alt="Logo EDUQ"
          className={`${styles.logo4} ${styles.logo}`}
        />
      </div>
    </header>
  );
}

export default Header;
