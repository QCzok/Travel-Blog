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
          <p>I went to Lima during the winter period. With the pandemic I might just as well have been the only tourist. I discovered the life in South America while taking Ubers to the shopping center and to tourist places in Miraflores. The highlight was a german beer with a flatmate's friend.</p>
        </article>

        <article>
          <h2>New York</h2>
          <h5>4 Weeks in the US</h5>
          <p>Stepping out of Penn Station for the first time leaves a memorable impression for the rest of the life. New York is impossible to be described in a travel blog. During my stay I witnessed Halloween in the center of Manhattan. </p>
        </article>

        <article>
          <h2>Los Angeles</h2>
          <h5>5 Weeks in the US</h5>
          <p>I lived in an Airbnb in West Hollywood. At that time I was still working remotely as a web dev trainer during the nights. After finishing lessons around 6am in the morning I slept for just a short while before starting my descovery around LA. At that time the buses were free and they took me to the mountains and the beach. Also I celebrated my 28th birthday. You can see a picture of the club in the Galerie.</p>
          </article>

          <article>
          <h2>Istanbul</h2>
          <h5>8 days in Turkey</h5>
          <p>In 2022 I went to Istanbul with a friend. We were mostly busy with the sightseeing. We booked a hotel in the center and went out with ferries or cabs. The food is impressive, just as the architecture and the people. On the east side we encountered a more lively area of Turkey. Here we found hippy bard, meetups and clubs. Istanbul was certainly worth its while. I will remember Turkey for its flavours, The best part was a Paulaner beer right in front of a VW Käfer.</p>
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