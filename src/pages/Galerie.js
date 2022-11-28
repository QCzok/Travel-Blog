import './Galerie.css';
import { Link } from 'react-router-dom';

// resources
import HeaderD from '../pictures/HeaderD.jpg';
import BarcelonaA from '../pictures/BarcelonaA.jpg';
import BarcelonaB from '../pictures/BarcelonaB.jpg';
import BarcelonaC from '../pictures/BarcelonaC.jpg';
import BarcelonaD from '../pictures/BarcelonaD.jpg';

function Galerie() {
  return (
    <div className="Galerie">
      <img src={HeaderD} alt='Hard Rock Caffee' className="HeaderImage" />
      <Link className="StandardButton" to="/">RETURN</Link>
      <section>
        <article>
          <h2>Barcelona</h2>
          <img src={BarcelonaA} alt='Street Picture from Barcelona' className="GaleriePicture" />
          <img src={BarcelonaB} alt='Street Picture from Barcelona' className="GaleriePicture" />
          <img src={BarcelonaC} alt='Street Picture from Barcelona' className="GaleriePicture" />
          <img src={BarcelonaD} alt='Street Picture from Barcelona' className="GaleriePicture" />

        </article>
        <article>
          <h2>Soulac</h2>
          <img src={HeaderD} alt='Miami Downtown' className="GaleriePicture" />
          <img src={HeaderD} alt='Miami Downtown' className="GaleriePicture" />
          <img src={HeaderD} alt='Miami Downtown' className="GaleriePicture" />
          <img src={HeaderD} alt='Miami Downtown' className="GaleriePicture" />
          <img src={HeaderD} alt='Miami Downtown' className="GaleriePicture" />
        </article>
        <article>
          <h2>Lima</h2>
          <img src={HeaderD} alt='Miami Downtown' className="GaleriePicture" />
          <img src={HeaderD} alt='Miami Downtown' className="GaleriePicture" />
          <img src={HeaderD} alt='Miami Downtown' className="GaleriePicture" />
          <img src={HeaderD} alt='Miami Downtown' className="GaleriePicture" />
          <img src={HeaderD} alt='Miami Downtown' className="GaleriePicture" />
        </article>
        <article>
          <h2>New York</h2>
          <img src={HeaderD} alt='Miami Downtown' className="GaleriePicture" />
          <img src={HeaderD} alt='Miami Downtown' className="GaleriePicture" />
          <img src={HeaderD} alt='Miami Downtown' className="GaleriePicture" />
          <img src={HeaderD} alt='Miami Downtown' className="GaleriePicture" />
          <img src={HeaderD} alt='Miami Downtown' className="GaleriePicture" />
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

export default Galerie;