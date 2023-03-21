import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home';
import ItemDetails from './pages/ItemDetails';
import './App.css'; 


function App() {
  const [posts, setPosts] = useState([])
 return (

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products/:id' element={<ItemDetails />}></Route>

    </Routes>
  )
}

export default App
