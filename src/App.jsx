import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
