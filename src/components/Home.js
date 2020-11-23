import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Home = () => {

  const [song, setSong] = useState([]);

  useEffect(() => {

    Axios
      .get(`https://api.spotify.com/`)
      .then(res => {
        console.log(res.data)
        setSong(res.data)
      })

  }, [])

  return (
    <div className="home">
      <section id="headline">
        <h1>Headline</h1>
        <h2>Sub-Header</h2>
        <button className="cta-btn">
          CALL TO ACTION!
        </button>
      </section>
      <section id="features">
        <ul>
          <li>Feature/Benefit 1</li>
          <li>Feature/Benefit 2</li>
          <li>Feature/Benefit 3</li>
        </ul>
      </section>
      <section id="reviews">
        <article>
          The Rock is neat!<br />
          <small><i>-Steven Sarria</i></small>
        </article>
        <article>
          The Rock is cool!<br />
          <small><i>-Brandon Garrett</i></small>
        </article>
        <article>
          The Rock is fun!<br />
          <small><i>-Michael DeGori</i></small>
        </article>
      </section>
      <section id="cta-form">
        <input type="email" placeholder="Email" /><br />
        <button type="submit">Submit</button>
      </section>
    </div>
  );
};

export default Home;