import './Galerie.css';
import { Link } from 'react-router-dom';

// resources
import HeaderD from '../pictures/HeaderD.jpg';
import BarcelonaA from '../pictures/BarcelonaA.jpg';
import BarcelonaB from '../pictures/BarcelonaB.jpg';
import BarcelonaC from '../pictures/BarcelonaC.jpg';
import BarcelonaD from '../pictures/BarcelonaD.jpg';

import SoulacA from '../pictures/SoulacA.jpg';
import SoulacB from '../pictures/SoulacB.jpg';
import SoulacC from '../pictures/SoulacC.jpg';
import SoulacD from '../pictures/SoulacD.jpg';
import SoulacE from '../pictures/SoulacE.jpg';
import SoulacF from '../pictures/SoulacF.jpg';

import LimaA from '../pictures/LimaA.jpg';
import LimaB from '../pictures/LimaB.jpg';
import LimaC from '../pictures/LimaC.jpg';
import LimaD from '../pictures/LimaD.jpg';
import LimaE from '../pictures/LimaE.jpg';
import LimaF from '../pictures/LimaF.jpg';

import NYA from '../pictures/NYA.jpg';
import NYB from '../pictures/NYB.jpg';
import NYC from '../pictures/NYC.jpg';
import NYD from '../pictures/NYD.jpg';
import NYE from '../pictures/NYE.jpg';
import NYF from '../pictures/NYF.jpg';
import NYG from '../pictures/NYG.jpg';

import LAA from '../pictures/LAA.jpg';
import LAB from '../pictures/LAB.jpg';
import LAC from '../pictures/LAC.jpg';
import LAD from '../pictures/LAD.jpg';
import LAE from '../pictures/LAE.jpg';
import LAF from '../pictures/LAF.jpg';
import LAG from '../pictures/LAG.jpg';
import LAH from '../pictures/LAH.jpg';

import ISTA from '../pictures/ISTA.jpg';
import ISTB from '../pictures/ISTB.jpg';
import ISTC from '../pictures/ISTC.jpg';
import ISTD from '../pictures/ISTD.jpg';
import ISTE from '../pictures/ISTE.jpg';
import ISTF from '../pictures/ISTF.jpg';
import ISTG from '../pictures/ISTG.jpg';
import ISTH from '../pictures/ISTH.jpg';
import ISTI from '../pictures/ISTI.jpg';


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
          <img src={SoulacA} alt='Street Picture' className="GaleriePicture" />
          <img src={SoulacB} alt='Street Picture' className="GaleriePicture" />
          <img src={SoulacC} alt='Street Picture' className="GaleriePicture" />
          <img src={SoulacD} alt='Street Picture' className="GaleriePicture" />
          <img src={SoulacE} alt='Street Picture' className="GaleriePicture" />
          <img src={SoulacF} alt='Street Picture' className="GaleriePicture" />
        </article>
        <article>
          <h2>Lima</h2>
          <img src={LimaA} alt='Street Picture' className="GaleriePicture" />
          <img src={LimaB} alt='Street Picture' className="GaleriePicture" />
          <img src={LimaC} alt='Street Picture' className="GaleriePicture" />
          <img src={LimaD} alt='Street Picture' className="GaleriePicture" />
          <img src={LimaE} alt='Street Picture' className="GaleriePicture" />
          <img src={LimaF} alt='Street Picture' className="GaleriePicture" />
        </article>
        <article>
          <h2>New York</h2>
          <img src={NYA} alt='Street Picture' className="GaleriePicture" />
          <img src={NYB} alt='Street Picture' className="GaleriePicture" />
          <img src={NYC} alt='Street Picture' className="GaleriePicture" />
          <img src={NYD} alt='Street Picture' className="GaleriePicture" />
          <img src={NYE} alt='Street Picture' className="GaleriePicture" />
          <img src={NYF} alt='Street Picture' className="GaleriePicture" />
          <img src={NYG} alt='Street Picture' className="GaleriePicture" />
        </article>
        <article>
          <h2>Los Angeles</h2>
          <img src={LAA} alt='Street Picture' className="GaleriePicture" />
          <img src={LAB} alt='Street Picture' className="GaleriePicture" />
          <img src={LAC} alt='Street Picture' className="GaleriePicture" />
          <img src={LAD} alt='Street Picture' className="GaleriePicture" />
          <img src={LAE} alt='Street Picture' className="GaleriePicture" />
          <img src={LAF} alt='Street Picture' className="GaleriePicture" />
          <img src={LAG} alt='Street Picture' className="GaleriePicture" />
          <img src={LAH} alt='Street Picture' className="GaleriePicture" />
        </article>
        <article>
          <h2>Istanbul</h2>
          <img src={ISTA} alt='Street Picture' className="GaleriePicture" />
          <img src={ISTB} alt='Street Picture' className="GaleriePicture" />
          <img src={ISTC} alt='Street Picture' className="GaleriePicture" />
          <img src={ISTD} alt='Street Picture' className="GaleriePicture" />
          <img src={ISTE} alt='Street Picture' className="GaleriePicture" />
          <img src={ISTF} alt='Street Picture' className="GaleriePicture" />
          <img src={ISTG} alt='Street Picture' className="GaleriePicture" />
          <img src={ISTH} alt='Street Picture' className="GaleriePicture" />
          <img src={ISTI} alt='Street Picture' className="GaleriePicture" />
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