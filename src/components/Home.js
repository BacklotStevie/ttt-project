import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Spotify from 'node-spotify-api';

const Home = () => {

  const [song, setSong] = useState([]);

  const spotify = new Spotify({
    id: 'ed8ef298820149d99b3308e2be8e13ba',
    secret: '14549ff5603445fc94434aff32e73a24'
  });

  spotify.search({ type: 'track', query: 'Bodak Yellow' }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    // console.log(data.tracks.items[0]);
  });

  return (
    <div className="home">
      <section id="headline">
        <h1>Toning with Teremana Tequila</h1>
        <h2>Sub-Header</h2>
        <button className="cta-btn">
          RESERVE YOUR SPOT!
        </button><br />
        <audio controls>
          <source src="https://p.scdn.co/mp3-preview/cab6e91217590b37cc254585f3f951c5a5280375?cid=ed8ef298820149d99b3308e2be8e13ba" type="audio/mp3" />
        </audio>
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