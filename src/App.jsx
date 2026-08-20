import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import TicketCart from './components/TicketCart/TicketCart';
import { ToastContainer, toast } from 'react-toastify';

const fetchCustomers = async () => {
  const res = await fetch('./customers.json')
  return res.json();
}
// fetch data and convert json
const customersPromise = fetchCustomers();


function App() {
const [taskSatusList, setTaskSatusList] = useState([]);
const inProgressCount = taskSatusList.length;


  return (
    <>
      <Navbar inProgressCount={inProgressCount}></Navbar>
      <TicketCart customersPromise={customersPromise} taskSatusList={taskSatusList} setTaskSatusList={setTaskSatusList}></TicketCart>
      <ToastContainer />
    </>
  )
}

export default App