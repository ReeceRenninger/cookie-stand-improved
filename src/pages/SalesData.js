import Footer from '../Components/Footer';
import Form from '../Components/Form';
import Header from '../Components/Header';
import Store from '../Components/Store';
import StoreTable from '../Components/Table';
import { useState } from 'react';

const SalesData = () => {

  const [stores, setStores] = useState([
    new Store('Seattle', 23, 65, 6.3),
    new Store('Tokyo', 3, 24, 1.2),
    new Store('Dubai', 11, 38, 3.7),
    new Store('Paris', 20, 38, 2.3),
    new Store('Lima', 2, 16, 4.6)
  ]);

  return (
    <>
      <Header />
      
      <StoreTable 
        stores={stores}
        setStores={setStores}
      />

      <Form 
        stores={stores}
        setStores={setStores}
      />

      <Footer />
    </>
  )
}

export default SalesData;