import React, { useState, useEffect } from 'react';

const Home = () => {
  return (
    <div className="home">

      <section id="headline">
        <h1>Toning with Teremana Tequila</h1>
        <button className="cta-btn">
          RESERVE YOUR SPOT!
        </button><br />
      </section>

      <section id="rock-pics">
        <article className="rock-images">
          <h2>Dwayne Shows His Softer Side in Zumba Class</h2>
          <img src="../images/rock-dancing.png" alt="rock dance" />
        </article>
        <article className="rock-images">
          <h2>Dwayne Promoting His New "Teremana" Tequila</h2>
          <img src="../images/rock-speaking.jpg" alt="rock speaking" />
        </article>
      </section>

      <section id="fake-rock-quote">
        <p>
          Have you ever been in the middle of your <b>Zumba</b> class and thought to yourself, "Man, I could use a shot. Also, The Rock was great in that movie I watched last night!"?<br /><br />
          Well, <i>you're not alone!</i><br /><br />
          For a <b>limited time only,</b> The Rock is inviting <i>you</i> into his home for a Zumba session followed by a cold beverage made with his very own Teremana Tequila.<br /><br />
          <h3>GET YOUR SPOT NOW!</h3>
        </p>
        <button className="cta-btn">
          SERIOUSLY, HE NEEDS THE MONEY. PLEASE SIGN UP.
        </button><br />
      </section>

      <section id="funny-rock-pic">
      </section>

      <section id="tequilas">
        <article id="blanco-section">
          <div id="blanco-items">
            <img src="../images/teremana-blanco.png" alt="blanco" />
            <div id="blanco-details">
              <h2>TEREMANA BLANCO</h2>
              <p>Teremana Tequila Blanco has notes of bright citrus with a smooth, fresh finish.</p>
              <button>Buy Me!</button>
            </div>
          </div>
        </article>
        <article id="repo-section">
          <div id="repo-items">
            <div id="repo-details">
              <h2>TEREMANA REPOSADO</h2>
              <p>Teremana Tequila Reposado has notes of oak and vanilla with a smooth rich finish.</p>
              <button>No, Buy Me!</button>
            </div>
            <img src="../images/teremana-repo.png" alt="repo" />
          </div>
        </article>
      </section>

      <section id="reviews">
        <div id="review-items">
          <h1>ALL PUBLICITY IS GOOD PUBLICITY</h1>
          <hr id="reveiw-line-break" />
          <div id="review-box">
            <article>
              <img src="../images/5-stars.png" alt="5 stars" /><br />
              "The Rock is neat!"<br />
              <small><i>-Steven Sarria (Movie Critic)</i></small>
            </article>
            <article>
              <img src="../images/5-stars.png" alt="5 stars" /><br />
              "The Rock is cool!"<br />
              <small><i>-Brandon Garrett (Wrestling Critic)</i></small>
            </article>
            <article>
              <img src="../images/5-stars.png" alt="5 stars" /><br />
              "The Rocks is fun!"<br />
              <small><i>-Michael DeGori (Petrologist)</i></small>
            </article>
          </div>
        </div>
      </section>

      <section id="cta">
        <div id="cta-items">
          <div id="cta-details">
            <h2>ARE YOU READY TO TONE WITH TEREMANA TEQUILA?!</h2>
            <button className="cta-btn">WE'RE DESPERATE</button>
            <p>Be a part of the greatest workout ever. Dance to great music. Drink lots of booze. Fantasize about The Rock. What could be better?</p>
          </div>
        </div>
      </section>

      <footer>
        <div class="social">
          <a href="https://www.instagram.com/teremana/" target="_blank">
            <img src="../images/insta.png" alt="insta" />
          </a>
          <a href="https://twitter.com/teremana" target="_blank">
            <img src="../images/twitter.png" alt="twitter" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;