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

  return (
    <>
      <Navbar></Navbar>
      <TicketCart customersPromise={customersPromise}></TicketCart>
    </>
  )
}

export default App