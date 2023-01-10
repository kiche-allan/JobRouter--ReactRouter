import { createBrowserRouter,  Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

//pages
import Home from './pages/Home'
import About from './pages/About'

// layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from "./layouts/HelpLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path = '/' element = {<RootLayout />}>
    <Route index element ={<Home />}/>
    <Route path = "about" element = {<About />}/>
    
    <Route path = "help" element = {<HelpLayout/>}>
      <Route path = "faq" />
      <Route path = "contact" />
    </Route>
  </Route>
  )
)


function App() {
  return (
    <RouterProvider router = {router} />
    
  );
}

export default App
