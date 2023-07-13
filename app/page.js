import Image from 'next/image';
import Header from './Components/Header';
import Table from './Components/Table';
import Store from './Components/Store';
import Form from './Components/Form';
import Footer from './Components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Table />
        <Store />
        <Form />
      </main>
      <Footer />
    </>
  )
}
