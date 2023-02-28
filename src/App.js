import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import Nav from './components/Nav';
import Home from './components/Home';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<Main />} />
          <Route path = "/country/:id" element={<CountryDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
