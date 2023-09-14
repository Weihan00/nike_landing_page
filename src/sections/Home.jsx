
import React from 'react';
import { Hero, PopularProducts, SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe, Footer } from '.';
import Nav from '../components/Nav';

const App = () => {
  return (
      <main className="relative">
        <Nav />
        <section className="xl:padding-1 wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding">
          <Services />
        </section>
        <section className="xl:padding-1 wide:padding-r padding-b">
          <SpecialOffer />
        </section>
        <section className="padding">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 ">
          <Subscribe />
        </section>
        <section className="padding-x bg-black padding-t pb-8">
          <Footer />
        </section>
      </main>

  );
};

export default App;
