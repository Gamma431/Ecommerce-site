import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Checkout from './pages/checkout'
import Nav from './components/Nav'

function App() {

  return (
    <div>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/checkout' element={<Checkout />}/>
      </Routes>
    </div>
  )
}

export default App
