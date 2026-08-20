import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import TicketCart from './components/TicketCart/TicketCart';

const fetchCustomers = async () => {
  const res = await fetch('./customers.json')
  return res.json();
}
// fetch data and convert json
const customersPromise = fetchCustomers();


function App() {

  const [countClick, setCountClick] = useState(0)


  return (
    <>
      <Navbar></Navbar>
      <TicketCart customersPromise={customersPromise} clickCart={clickCart} setClickCart={setClickCart}></TicketCart>
    </>
  )
}

export default App