import React from 'react';
import styles from './Products.module.css';
import SingleProduct from './SingleProduct/SingleProduct';

function Products() {
  return (
    <main>
      <section className={styles.productsContainer}>
        <SingleProduct />
      </section>
    </main>
  );
}

export default Products;
