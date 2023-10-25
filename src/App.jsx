import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Header from './Components/Header/Header';
import Skill from './pages/Skill/Skill';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/skills' element={<Skill/>}/>
      </Routes>
      {/* <div className='background_nimation'>
        <span className='animation_ball ball1'></span>
        <span className='animation_ball ball2'></span>
      </div> */}
    </div>
  );
}

export default App;
