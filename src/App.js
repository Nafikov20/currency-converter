import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import { HomePage } from './Pages/HomePage';
import { SecondPage } from "./Pages/SecondPage";

function App() {
   return (
      <>
         <header >
            <Link className="btn btn-primary" role="button" data-bs-toggle="button" to='/'>Конвертер</Link> 
            <Link className="btn btn-primary" role="button" data-bs-toggle="button" to='/second'>Курсы валют</Link>
         </header>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/second" element={<SecondPage /> } />
         </Routes>
      </>
   )
}

export default App;