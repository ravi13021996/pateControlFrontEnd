import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AppBar from './components/common/AppBar';
import HomePage from './pages/HomePage';
import MarketingPage from './pages/MarketingPage';
import HomeCmopo from './components/HomeCmopo';
import AboutUsPage from './pages/AboutUsPage';
function App() {
  return (
    <div className="App" style={{ height:"100%"}}>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage/>} ></Route>
              <Route path='/About' element={<AboutUsPage/>}></Route>
              <Route path='/Contact' element={<AboutUsPage/>}></Route>
              <Route path='/Marketing' element={<MarketingPage/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
