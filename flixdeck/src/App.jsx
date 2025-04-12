import './css/App.css'
import Home from './Pages/Home.jsx';
import Favorite from './Pages/Favorite.jsx';
import {Routes, Route} from "react-router-dom"
import NavBar from './Nav.jsx';


function App() {

  return (
    <>
    <NavBar/>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
      </Routes>
    </main>
    </>
  )
}

export default App;
