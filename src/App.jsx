import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='count'>
        <p>The count is {count} </p>
        <div className='btn'>
          <button onClick={() => { setCount(count + 1) }}>Count</button>
        </div>
      </div>
    </>
  )
}

export default App
