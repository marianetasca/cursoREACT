import './App.css'
// React Router

import { Outlet } from "react-router-dom"

import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <h1>React Router</h1>
        {/* search */}
        <SearchForm />
        <Outlet />
        <p>footer</p>
      </div>
    </>
  )
}

export default App
