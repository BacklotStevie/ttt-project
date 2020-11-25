import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Axios from 'axios';

const SubmitInfo = () => {

  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {

    Axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila`)
      .then(async res => {
        let cocktailInfo = []
        for (let drink of res.data.drinks) {
          let info = await Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink.strDrink}`)
          cocktailInfo.push(info.data.drinks[0])
        }
        setCocktails(cocktailInfo)
      })

  }, [])

  console.log(cocktails)

  const cocktailData = (cocktail) => {

    return cocktails.map((eachCocktail) => {
      let ingredients = [];


      for (let i = 1; i < 15; i++) {
        let ingredientStr = 'strIngredient'
        ingredientStr += i
        if (eachCocktail[ingredientStr] != null) {
          ingredients.push(<li>{eachCocktail[ingredientStr]}</li>)
        }
      }

      console.log(ingredients)
      return (
        <article className="drink-card">
          <img src={eachCocktail.strDrinkThumb} alt="drink" />
          <h2>{eachCocktail.strDrink}</h2>
          <p>{ingredients}</p>
          <button>SELECT</button>
        </article>
      )
    })

  }



  return (
    <div className="submit">

      <section id="submit-header">
        <h1>GET ON IN HERE!</h1>
      </section>

      <section id="registration">
        <h2>LET'S GET YOU SIGNED UP</h2>
        <div className="form">
          <div className="name">
            Name<br />
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="email">
            Email<br />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="birthday">
            Date of Birth<br />
            <input type="date" />
          </div>
          <div className="preferred-date">
            Preferred Date<br />
            <input type="date" />
          </div>
        </div>
      </section>

      <section id="choose-cocktail">
        <h2>PICK YOUR POISON</h2>
        <div id="top-separator">
          <h1>EACH MADE WITH AUTHENTIC TEREMANA TEQUILA!</h1>
        </div>
        <div id="drinks" className="drinks-container">
          {cocktailData()}
        </div>


        <div className="form-button">
          <button>
            SUBMIT
          </button>
        </div>
      </section>

    </div>
  );
};

export default SubmitInfo;