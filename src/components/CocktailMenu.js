import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const CocktailMenu = () => {

  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {

    Axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila`)
      .then(res => {
        console.log(res.data)
        setCocktails(res.data.drinks)
      })

  }, [])

  // console.log(cocktails)

  const showCocktailDetails = () => {
    return cocktails.map(eachCocktail => {
      return (
        <div id="drinks">
          <h2>
            {eachCocktail.strDrink}
          </h2>
          <img src={eachCocktail.strDrinkThumb} alt="" />
        </div>
      )
    })
  }

  return (
    <div>
      <h1>The Rock's Menu!</h1>

      {showCocktailDetails()}
    </div>
  );
};

export default CocktailMenu;