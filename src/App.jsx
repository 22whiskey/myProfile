import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Homepage } from "./Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
