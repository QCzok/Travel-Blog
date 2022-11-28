import './Info.css';
import { Link } from 'react-router-dom';

// resources
import HeaderC from '../pictures/HeaderC.jpg';
import Profile from '../pictures/Profile.jpg';

function Info() {
  return (
    <div className="Info">
      <img src={HeaderC} alt='Cafe at a Shopping Center in Miami Downtown' className="HeaderImage" />
      <Link className="StandardButton" to="/">RETURN</Link>
        <section className="InfoSection">
          <article>
          <h2>Cheers!</h2>
          <p>Travel is one of my biggest passions.</p>
          <p>I started writing this blog in 2020 and I will continue adding regular content.</p>
          <p>In the Stories and the Galerie I will add journies and label them with a date.</p>
          <p>Feel free to suggest the next travel destination.</p>
          <h5>A little about me</h5>
          <p>I'm originally from Germany, Bavaria.</p>
          <p>Now I'm 29 years old and I'm a sagittarius.</p>
          <p>As a profession I'm a software developer.</p>
          <p>Besides travel I like to drive old cars and play tennis.</p> 
          </article>
          <article>
        <img src={Profile} alt='Profile Picture' className="ProfileImage" />
        </article>
        </section>
        <footer>
          <br />
          <br />
          <p>Jan Czok</p>
          <p>jan.czok@outlook.de</p>
        </footer>
    </div>
  )
}

export default Info;