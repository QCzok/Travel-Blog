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
      <Route path="/Travel-Blog" element={<Start />} />
      <Route path="/Travel-Blog/stories" element={<Stories/>} />
      <Route path="/Travel-Blog/galerie" element={<Galerie/>} />
      <Route path="/Travel-Blog/info" element={<Info/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;