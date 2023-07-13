'use client';

import Form from '../Components/Form';
// import Table from '../Components/Table';
import Store from '../Components/Store';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useState } from 'react';

const SalesData = () => {
  // trying to call the store constructor function in Store component to generate the starting stores
  const [allStores, setAllStores] = useState([
    ['Seattle', 23, 65, 6.3],
    ['Tokyo', 3, 24, 1.2],
    ['Dubai', 11, 38, 3.7],
    ['Paris', 20, 38, 2.3],
    ['Lima', 2, 16, 4.6]
  ]);
  const [hours, setHours] = useState([["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]])
  // trying to feed the stores and setStores into table and form component to be able to use them
  return (
    <>
      <Header />
      {/* Add this in once the Table is working - maybe table goes inside store component to use all the data?? */}
      {/* <Table 
        stores={allStores}
        setStores={setAllStores}
      /> */}
      <Store
        allStores={allStores}
        setAllStores={setAllStores}
        hours={hours}
      />
      <Form
        allStores={allStores}
        setAllStores={setAllStores}
      />
      <Footer />
    </>
  )
}

export default SalesData;