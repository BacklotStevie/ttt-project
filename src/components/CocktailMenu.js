import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const CocktailMenu = () => {

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
          ingredients.push(<span className="ingredients">{eachCocktail[ingredientStr]}<span>, </span></span>)
        }
      }

      console.log(ingredients)
      return (
        <article className="drink-card">
          <img src={eachCocktail.strDrinkThumb} alt="drink" />
          <h2>{eachCocktail.strDrink}</h2>
          <div>{ingredients}</div><br />
        </article>
      )
    })

  }

  return (
    <div id="drinks-header">
      <h1>THE ROCK'S MENU!</h1>
      <div className="drinks">
  
        {cocktailData()}
      </div>
    </div>
  );
};

export default CocktailMenu;