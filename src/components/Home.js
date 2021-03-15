import React from 'react';
import './home.css'
import { Link } from 'react-router-dom';

class Home extends React.Component{

    render(){
        return (
            <div className="search">
                 <img src="recipe.png"/>
                 <div className="heading">
                    <h2 className="first-heading">Low calorie juice recipes</h2>
                    <h1 className="second-heading">It's Juice Time..</h1>
                 </div>
                
                 <button className="search-btn">
                    <Link className="underline"to='/search'>
                         Get started
                    </Link>
                 </button>
            
            </div>
        )
    }

}

export default Home;