import './App.css'
import Start from './pages/Start';
import Galerie from './pages/Galerie';
import Info from './pages/Info';
import Stories from './pages/Stories';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/Travel-Blog" element={<Start />} />
      <Route path="/stories" element={<Stories/>} />
      <Route path="/galerie" element={<Galerie/>} />
      <Route path="/info" element={<Info/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;