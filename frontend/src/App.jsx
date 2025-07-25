
import { useState } from 'react'
import './App.css'
import ModalForm from './components/ModalForm'
import NavBar from './components/Navbar'
import TableList from './components/TableList'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');

  const handleOpen = (mode) => {
    setModalMode(mode);
    setIsOpen(true);
  }
  
  const handleSubmit = () => {
    if(modalMode === "Add"){
      console.log("modal mode Add");
    }else{
      console.log("modal mode Edit");
    }
  }

  return (
    <>
      <NavBar onOpen={() => handleOpen("add")} />
      <TableList handleOpen={handleOpen} />
      <ModalForm isOpen={isOpen} OnSubmit={handleSubmit} onClose={() => setIsOpen(false)} mode={modalMode} />
    </>
  )
}

export default App
