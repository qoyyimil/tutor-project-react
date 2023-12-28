import { useState } from 'react'
import Navbar from './components/organisms/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
			<h1 class="text-[60px] font-normal text-blue-500 text-center">
		    Hello World!
		  </h1>
    </>
  )
}

export default App