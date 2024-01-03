import React from 'react';
import productData from '../../../data/products.json';
import styles from './SingleProduct.module.css';

function SingleProduct() {
  return productData.map(product => (
    <a href={product.link} key={product.id} className={styles.productCard}>
      <img
        className={styles.productImage}
        src={process.env.PUBLIC_URL + product.photo}
        alt={product.title}
      />
      <div className={styles.productTitle}>{product.title}</div>
    </a>
  ));
}

export default SingleProduct;
