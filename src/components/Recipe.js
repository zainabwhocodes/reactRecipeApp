import { render } from '@testing-library/react';
import React from 'react';
import './recipe.css';
import { Link } from 'react-router-dom';
import Detail from './Detail'

const  Recipe  =  (props)  => {

    console.log(props)
    /*
    
    <h3>{props.prepTime}</h3>
         

    <h3>{props.cookingTime}</h3>
    <p>{props.ingredients}</p>
    <p>{props.recipe}</p>
    <h2>{props.serves}</h2>
    <h2>{props.calories}</h2>*/
    return( 
            <div className="card">
                <img className='recipe__image' src={props.src}/>
                <div className="details">

                    <div className="time__detail">
                        <div class="prep__Time">
                            <i class="far fa-clock"></i>
                            {props.prepTime} 
                            <p>Prep Time</p>
                        </div>
                        <div className="cooking__Time">
                            <i class="far fa-clock"></i>
                            {props.cookingTime} 
                            <p>Cook Time</p>
                        </div>
                    </div>

                    <h1>{props.name}</h1>

                    <div className="section__button">  
                        <div className="serves">
                            <div className="serve__details">
                                <div class="serve__Number"> {props.serves} </div>
                                Serving
                            </div>
                        </div>  
                        <div className="serves">
                            <div className="serve__details">
                                <div class="serve__Number"> {props.calories} </div>
                                Calories
                            </div>
                        </div>                  
                        
                    </div>

            </div>

    <Link  className="view__Recipe"
        to={{
        pathname: "/detail",
        state:{ text: 'world'}
    }}>
        View Recipe
    </Link>       
            </div>
        
    );
}

export default Recipe;