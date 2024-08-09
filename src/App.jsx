import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'; 
import Checkout from './component/Checkout';
import Success from './component/Success';
function App() {

  return (
    <Router>
        <div>
          <Routes>
             <Route path='/checkout' element={<Checkout />}></Route>
             <Route path='/success' element={<Success />}></Route>
          </Routes>
        </div>
    </Router>
    
  )
}

export default App
