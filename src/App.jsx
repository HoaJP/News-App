import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Newsboard from './components/NewsBoard';

function App() {

  const [category, setCategory] = useState("general")
  return (
    <>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
    </>
  );
}

export default App
