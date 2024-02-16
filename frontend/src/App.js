
import './App.css';
import Register from './components/Register';
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
