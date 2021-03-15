import React from 'react';
import './detail.css'

const  Detail  =  (props)  => {

    console.log(props)
    const recipe = { 
            id: 1,
            name: 'Tea',
            prepTime: '0 mins',
            cookingTime: '10 mins',
            ingredients  : ['1 teabag', '1/2 cup water', '1/2 cup milk'],
            recipe: ['Boil water','Add teabag in water and brew 2-3 mins','Add milk and boil. Cook for 1 min and serve'],
            serves: '1',
            calories: '270kcal',
            src:'tea.png'
        };

        let i = 0;

    return(
        <div className="recipe-card">            
            <h1 className="title">{ recipe.name }</h1>
            <div className="tags">
            <h2 className="prepTime">Prep: { recipe.prepTime }</h2>
            <h3 className="cookTime">Cook: { recipe.cookingTime }</h3>
            </div>

            <div class="image-description">
                <img className='image ' src='tea.png'/>
                <div class="little-description"> 
                    <p>Serve: {recipe.serves} </p> 
                    <p>Calories: {recipe.calories}</p> 
                    <p>Author: Zainab Iftikhar</p> 
                    <p>Total Time: 30mins</p> 
                </div>
            </div>

            <div class="sticky-note">
                <img src="clock.png"/>
            </div>

            <div className='recipe-container'>
                <h1 className="ingredients--heading">Ingredients</h1>
                {   
                    recipe.ingredients.map(ingredient => (
                    <div className='ingredients'>
                        <input type="checkbox"/>
                        {   ingredient    }
                    </div>
                ))}

                <hr/>
            
                <h1 className="ingredients--heading">Direction</h1>
                {   
                    recipe.recipe.map(recipe => (
                    <div className='recipe-list'>
                        <p>Step {i = i+ 1}</p>
                        {   recipe    }
                    </div>
                ))}
            </div>

        

          
        </div>

    );
}


export default Detail;