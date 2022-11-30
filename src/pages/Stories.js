import './Stories.css';
import { Link } from 'react-router-dom';

// resources
import HeaderB from '../pictures/HeaderB.jpg';
import stories from '../resources/stories.json';

function Stories() {

  return (
    <div className="Stories">
      <img src={HeaderB} alt='Miami Downtown' className="HeaderImage" />
      <Link className="StandardButton" to="/Travel-Blog">RETURN</Link>

      <section>
        {stories.map((story) =>
        <article>
          <h2>{story.headline}</h2>
          <h5>{story.description}</h5>
          <p>{story.text}</p>
          </article>
        )}
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

export default Stories;