import Checkout from "./Components/Checkout/Checkout"
import Hunt from "./Components/Hunt/Hunt"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Reachout from "./Components/Reachout/Reachout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hunt />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/reachout" element={<Reachout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App