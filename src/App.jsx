import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Tasks from './Pages/Tasks'
// import History from './Pages/History'

function App() {

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path={"/Login"} element={ <Login /> } />
        <Route path={"/Register"} element={ <Register/> } />
        <Route exact path={"/"} element={ <Home/> } />
        <Route path={"/Tasks"} element={ <Tasks/> } />
        {/* <Route path={"/History"} element={ <History/> } /> */}
      </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
