
import { useState } from 'react'
import './App.css'
import ModalForm from './components/ModalForm'
import NavBar from './components/Navbar'
import TableList from './components/TableList'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');


  

  return (
    <>
      <NavBar />
      <TableList />
      <ModalForm />
    </>
  )
}

export default App
