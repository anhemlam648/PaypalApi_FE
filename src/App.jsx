import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'; 
import Checkout from './component/Checkout';
function App() {

  return (
    <Router>
        <div>
          <Routes>
             <Route path='/' element={<Checkout />}></Route>
          </Routes>
        </div>
    </Router>
    
  )
}

export default App
