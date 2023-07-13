import Image from 'next/image';
// import React, { useState } from 'react';
import Header from './Components/Header';
import Table from './Components/Table';
import Form from './Components/Form';
import Footer from './Components/Footer';
// import Store from './Components/Store';

export default function Home() {
  return (
    <>

      <Header />
      <main>
        <Table />
        {/* <Store /> */}
        <Form />
      </main>
      <h2> Store Locations </h2>
      <ul>
        <li>Seattle @ 1234 Queen Anne Ave.</li>
        <li>Tokyo @ 5678 Cherry Blossom St.</li>
        <li>Dubai @ 1234 Dubai Creek Rd.</li>
        <li>Paris @ 5678 Eiffel Tower Ln.</li>
        <li>Lima @ 1234 Peru Ave. </li>
      </ul>
      <Footer />
    </>
  )
}
