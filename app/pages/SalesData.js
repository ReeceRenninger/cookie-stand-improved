import Form from '../app/Components/Form';
import Table from '../app/Components/Table';
import Store from '@/Components/storeModel';
import { useState } from 'react';
import Header from '../app/Components/Header';
import Footer from '../app/Components/Footer';

const SalesData = () => {
// trying to call the store constructor function in Store component to generate the starting stores
  const [stores, setStores] = useState([
    new Store('Seattle', 23, 65, 6.3),
    new Store('Tokyo', 3, 24, 1.2),
    new Store('Dubai', 11, 38, 3.7),
    new Store('Paris', 20, 38, 2.3),
    new Store('Lima', 2, 16, 4.6)
  ]);
  // trying to feed the stores and setStores into table and form component to be able to use them
  return (
    <>
      <Header />
      {/* Add this in once the Table is working */}
      {/* <Table 
        stores={stores}
        setStores={setStores}
      /> */}
      <Form 
        stores={stores}
        setStores={setStores}
      />
      <Footer />
    </>
  )
}

export default SalesData;