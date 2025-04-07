import Hunt from "./Components/Hunt/Hunt"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hunt />} />
        <Route path="/checkout" element={<Hunt />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App