import Container from './Container/Container';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Products from './Products/Products';

import { Suspense } from 'react';
// import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Suspense>
        <Header />
        <Container>
          <Products />
        </Container>
        <Footer />
      </Suspense>
    </>
  );
};
