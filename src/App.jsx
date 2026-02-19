import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Checkout from './pages/checkout'
import Nav from './components/Nav'
import AuthProvider from './context/AuthContext'
import ProductDetails from './pages/checkout'
import Footer from './components/footer'

function App() {

  return (
    <AuthProvider>
      <div>
        <Nav />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='/products/:id' element={<ProductDetails  />}/>
        </Routes>

        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App
