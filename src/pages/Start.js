import './Start.css';
import { Link } from "react-router-dom";

// resources
import HeaderA from '../pictures/HeaderA.jpg'

function App() {
  return (
    <main>
      <img src={HeaderA} alt='Miami Beach' className="HeaderImage" />
      <p className="headline">Travel Blog</p>
      <p className="headline">Stories from around the world</p>
      <p className="headline">Jan Czok</p>
      <p className="headline">2020-2022</p>
      <section className="menu">
        <Link className="item" to="/Travel-Blog/stories">
          <i className="fa-solid fa-book-atlas"></i>
          <p className='cursive'>Stories</p>
        </Link>
        <Link className="item" to="/Travel-Blog/galerie">
          <i className="fa-solid fa-camera-retro"></i>
          <p className='cursive'>Galerie</p>
        </Link>
        <Link className="item" to="/Travel-Blog/info">
          <i className="fa-solid fa-info"></i>
          <p className='cursive'>About me</p>
        </Link>
      </section> 
      <footer>
        <h3>Disclaimer</h3>
        <p>This blog is personal; it's both written and edited by the author. No further party is represented or affiliated.</p>
        <span><i className="fa-solid fa-at"></i></span>
        <p>Jan Czok</p>
        <p>jan.czok@outlook.de</p>
      </footer> 
    </main>
  );
}

export default App;
