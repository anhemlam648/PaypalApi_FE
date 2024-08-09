import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'; 

function App() {

  return (
    <Router>
        <div>
          <Routes>
             <Route path='/'></Route>
          </Routes>
        </div>
    </Router>
    
  )
}

export default App
