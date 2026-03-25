import { useState } from 'react'
import './App.css'
import {UsersData} from './Components/UsersData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mainCards'>
      <UsersData/>
      </div>
    </>
  )
}

export default App
