import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Courses from './components/Courses/Courses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* Heading Section Start */}
      <div className="text-center container mx-auto"> 
      <h1 className="text-4xl font-semibold">Discover Our Popular Courses</h1>
      <div className="flex justify-center">
      <p className="pt-5  lg:w-1/2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
      </div>
      </div>
      {/* Heading Section end */}
      <Courses></Courses>
    </div>
  )
}

export default App
