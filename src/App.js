import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//pages
import Home from './pages/Home'
import About from './pages/About'


function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path = "/" element ={<Home />}/>
        <Route path = "about" element = {<About />}/>
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App
