import './Stories.css';
import { Link } from 'react-router-dom';

// resources
import HeaderB from '../pictures/HeaderB.jpg';

function Stories() {
  return (
    <div className="Stories">
      <img src={HeaderB} alt='Miami Downtown' className="HeaderImage" />
      <Link className="StandardButton" to="/Travel-Blog">RETURN</Link>
      <section>
        <article>
          <h2>Barcelona</h2>
          <h5>3 Months in Spain</h5>
          <p>I travelled to Barcelona with 3 friends from Berlin. During the period of a few months I made new friends. We went out for Tapas or went to the movies. In the Galerie you can find two dogs. They are from my host, she let me walk them out once in a while. The best thing about Barcelona is probably the good weather, the beach and the fun community. I might consider Barcelona for another visit one day.</p>
        </article>

        <article>
          <h2>Soulac</h2>
          <h5>2 Weeks in France</h5>
          <p>I went to Soulac with a good friend from Munich. We took our tents with us and arrived by public transportation. Once in Soulac we found a camp site close to the Atlantic ocean. Soulac might have the best beaches, however the water is chilly most of the year. France is probably best for it's food. I enjoyed the crossants and the restaurant food a lot!</p>
        </article>

        <article>
          <h2>Lima</h2>
          <h5>2 Weeks in Peru</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </article>

        <article>
          <h2>New York</h2>
          <h5>November 2020 - 4 Weeks in the US</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
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

export default Stories;