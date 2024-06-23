import { useState } from 'react'
import './App.scss'
import {Toaster} from "react-hot-toast";
import {Outlet} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toaster />
      <Outlet />
    </>
  )
}

export default App
