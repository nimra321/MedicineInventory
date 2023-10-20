
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import MyFooter from './components/myFooter'

function App() {

  return (
    <>
    <Navbar/>
      <div className='min-h-screen'>
        <Outlet/>
      </div>
      <MyFooter/>
    </>
  )
}

export default App
