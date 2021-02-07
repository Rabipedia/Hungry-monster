fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
.then(res => res.json())
.then(data => displayMeals(data))

 const displayMeals = meals => {
    // console.log(meals);
    // const foods = Object.keys(meals);
    console.log(meals);
    const mealContainer = document.getElementById('meals');
    meals.forEach(meal => {
      console.log(meal);
       const mealDiv = document.createElement('div');
       mealDiv.className = 'meal-div';
        const mealInfo = `
         <h3 class="meal-name">${meal.idMeal}</h3>
          <p class="meal-recipe">${meal.strInstructions}</p>
        `;

        mealDiv.innerHTML = mealInfo;
        mealContainer.appendChild(mealDiv);
        
    });
   
   
}
