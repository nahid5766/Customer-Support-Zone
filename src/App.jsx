import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TicketCart from './components/TicketCart/TicketCart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fetchCustomers = async () => {
  const res = await fetch('./customers.json');
  return res.json();
};

const customersPromise = fetchCustomers();

function App() {
  const [taskSatusList, setTaskSatusList] = useState([]);
  const [resolvedList, setResolvedList] = useState([]);

  return (
    <>
      <Navbar 
        taskSatusList={taskSatusList} 
        resolvedList={resolvedList} 
      />

      <TicketCart 
        customersPromise={customersPromise} 
        taskSatusList={taskSatusList} 
        setTaskSatusList={setTaskSatusList}
        resolvedList={resolvedList}
        setResolvedList={setResolvedList}
      />

      <ToastContainer position="top-right" autoClose={1000} />
    </>
  );
}

export default App;