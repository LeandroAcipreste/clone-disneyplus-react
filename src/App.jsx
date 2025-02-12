import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Detail from './components/detail/detail';
import Login from './components/login/login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Corrigido

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/detail" element={<Detail />} />
        <Route path='/login'  element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;

