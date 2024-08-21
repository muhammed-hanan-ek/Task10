import { useState, useEffect } from 'react'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('bg-dark')

  useEffect(() => {
    document.body.className = backgroundColor
  }, [backgroundColor])

  const changeColor = (color) => {
    setBackgroundColor(color)
  }
  return (
    <>
      <div className='d-flex flex-column align-items-center justify-content-center' style={{ height: '100vh' }}>
        <h1 className='text-center text-light'>Background Color Changer</h1>
        <div className='d-flex justify-content-between mt-5'>
          <button type='button' className='btn btn-success btn-outline-light text-light' onClick={() => changeColor('bg-success')}>Green</button>
          <button type='button' className='btn btn-primary btn-outline-light ms-2 text-light' onClick={() => changeColor('bg-primary')}>Blue</button>
          <button type='button' className='btn btn-warning btn-outline-light ms-2 text-light' onClick={() => changeColor('bg-warning')}>Orange</button>
          <button type='button' className='btn btn-danger btn-outline-light ms-2 text-light' onClick={() => changeColor('bg-danger')}>Red</button>
          <button type='button' className='btn btn-secondary btn-outline-light ms-2 text-light' onClick={() => changeColor('bg-secondary')}>Grey</button>
          <button type='button' className='btn btn-dark btn-outline-light ms-2 text-light' onClick={() => changeColor('bg-dark')}>Black</button>
        </div>
      </div>
    </>
  )
}

export default App