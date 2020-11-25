import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const SubmitInfo = () => {

  const [cocktails, setCocktails] = useState([]);
  const [recipes, setRecipes] = useState([]);

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

  const cocktailData = () => {

    let cocktailNames = []
    let cocktailUrls = []
    let cocktailIngredients = {}

    cocktails.map((eachCocktail) => {
      cocktailNames.push(eachCocktail?.strDrink)
      cocktailUrls.push(eachCocktail?.strUrl)

      let ingredientStr = 'strIngredient'

      for (let i = 1; i < 15; i++) {
        ingredientStr += i
        console.log(ingredientStr)
        if (eachCocktail?.ingredientStr != null) {
          cocktailIngredients.push(eachCocktail?.ingredientStr)
        } else {
          break;
        }
      }
    })

    console.log(cocktailIngredients)

    return (
      <div class="cocktail">
        <h2>{cocktails}</h2>
      </div>
    )
  }

  cocktailData()

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
        <hr id="separator" />

        <div id="drinks" class="drinks-container">
          <h1>Choose Cocktail</h1>
          <div class="drinks-card">
            <div class="drinks-1">
              <h2>Margarita</h2>
              <img src="placeholder.png" alt="Drink-1"
                class="drink-image" />
              <p>Tequila, Raspberry, Lemon, Simple Syrup, Mint</p>
            </div>
            <div class="drink-2">
              <h2>Brave Bull</h2>
              <img src="placeholder.png" alt="Drink-2"
                class="drink-image" />
              <p>Tequila, Raspberry, Lemon, Simple Syrup, Mint</p>
            </div>
            <div class="drink-3">
              <h2>Paloma</h2>
              <img src="placeholder.png" alt="Drink-3"
                class="drink-image" />
              <p>Tequila, Raspberry, Lemon, Simple Syrup, Mint</p>
            </div>
            <div class="drink-4">
              <h2>Tequila Sunrise</h2>
              <img src="placeholder.png" alt="Drink-4"
                class="drink-image" />
              <p>Tequila, Raspberry, Lemon, Simple Syrup, Mint</p>
            </div>
          </div>
        </div>


        <div className="form-button">
          <button>
            Submit
          </button>
        </div>
      </section>

    </div>
  );
};

export default SubmitInfo;