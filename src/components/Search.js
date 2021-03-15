import React from 'react';
import './search.css';
import Recipe from './Recipe';

class Search extends React.Component{

    constructor(){
        super();
        this.state = {
            recipes : [],
            currentResult:[],
            searchQuery: ''
        }
    }

    componentDidMount(){

        let recipes = [ 
            {
                id: 1,
                name: 'Tea',
                prepTime: '0 mins',
                cookingTime: '10 mins',
                ingredients  : ['1 teabag', '1/2 cup water', '1/2 cup milk'],
                recipe: ['Boil water','Add teabag in water and brew 2-3 mins','Add milk and boil. Cook for 1 min and serve'],
                serves: '1',
                calories: '270kcal',
                src:'tea.png'
            },
            {
                id: 2,
                name: 'Tea',
                prepTime: '0 mins',
                cookingTime: '10 mins',
                ingredients  : ['1 tsp coffee', '1 cup milk','2 tsp sugar','1/4 cup hot water'],
                recipe: ['Beat coffe with sugar and 1/2 tsp hot water','Add boiled milk','Serve hot'],
                serves: '1',
                calories: '270kcal',
                src:'coffee.png'
            },
            {
                id : 3,
                name: 'Orange Juice',
                prepTime: '0 mins',
                cookingTime: '5 mins',
                ingredients  : ['6 oranges','ice'],
                recipe: ['Squeeze oranges to extract juice','Add ice','Blend juice and ice'],
                serves: '1',
                calories: '100kcal',
                src:'orange.png'
            },
            {
                id: 4,
                name: 'Strawberry Milk Shake',
                prepTime: '0 mins',
                cookingTime: '5 mins',
                ingredients  : ['1 cup milk','1 small cup strawberry','2 tsp sugar','ice'],
                recipe: ['Combine milk, stawberry, sugar and ice in blender.Blend until combined well'],
                serves: '1',
                calories: '100kcal',
                src:'strawberry-milkshake.png'
            },
            {
                id: 5,
                name: 'Banana Milk Shake',
                prepTime: '0 mins',
                cookingTime: '5 mins',
                ingredients  : ['1 cup milk','2 peeled banana','2 tsp sugar','ice'],
                recipe: ['Combine milk, bananas, sugar and ice in blender.Blend until combined well'],
                serves: '1',
                calories: '100kcal',
                src:'banana.png'
            },
            {
                id: 5,
                name: 'Pineapple Juice',
                prepTime: '0 mins',
                cookingTime: '5 mins',
                ingredients  : ['1 cup milk','1/2 cup pinepple chunks','1/2 cup pinapple juice','ice'],
                recipe: ['Combine milk, pineapple chunks, pineapple juice, sugar and ice in blender.Blend until combined well'],
                serves: '1',
                calories: '100kcal',
                src:'pineapple.png'
            },
            {
                id: 6,
                name: 'Cocktail Juice',
                prepTime: '0 mins',
                cookingTime: '5 mins',
                ingredients  : ['1 cup milk','1/2 cup pinepple chunks','1/2 cup strawberry','1 peeled banana','ice'],
                recipe: ['Combine milk, pineapple chunks, strawberry, banana and ice in blender.Blend until combined well'],
                serves: '1',
                calories: '100kcal',
                src:'cocktail.png'
            },
            {
                id: 6,
                name: 'Ginger Zinger Juice',
                prepTime: '0 mins',
                cookingTime: '5 mins',
                ingredients  : ['2 medium apples','5 carrots','1/2 inch fresh ginger','2 tbsp lemon juice','ice'],
                recipe: ['Combine apples, carrots, ginger, lemon juice and ice in blender.Blend until combined well'],
                serves: '1',
                calories: '100kcal',
                src:'ginger-zinger.png'
            },
            {
                id: 7,
                name: 'Green Goddess Juice',
                prepTime: '0 mins',
                cookingTime: '5 mins',
                ingredients  : ['3 stalks celery','1/2 cucumber','1 medium green apple','1 medium pear','ice'],
                recipe: ['Combine celery, cucumber, apple, pear and ice in blender.Blend until combined well'],
                serves: '1',
                calories: '100kcal',
                src:'green-goddess.png'
            },
            {
                id: 8,
                name: 'Tropi-Kale Juice',
                prepTime: '0 mins',
                cookingTime: '5 mins',
                ingredients  : ['1/2 cup pineapple chunks with juice','4 Kale Leaves','1 ripe banana','ice'],
                recipe: ['Combine pineapple, kale leaves, banana and ice in blender.Blend until combined well'],
                serves: '1',
                calories: '100kcal',
                src:'tropi-kale.png'
            },
            {
                id: 9,
                name: 'Antioxidant blast Juice',
                prepTime: '0 mins',
                cookingTime: '5 mins',
                ingredients  : ['2 medium beets','1 cup blueberries','1 cup halved, hulled straberries','ice'],
                recipe: ['Combine all ingredients. Blend until combined well'],
                serves: '1',
                calories: '100kcal',
                src:'antioxidant-blast.png'
            },

            {
                id: 10,
                name: 'Not-So-Sour Apple Juice',
                prepTime: '0 mins',
                cookingTime: '5 mins',
                ingredients  : ['2 Tart apples','5 kale leaves','ice'],
                recipe: ['Combine all ingredients. Blend until combined well'],
                serves: '1',
                calories: '100kcal',
                src:'tea.png'
            },
            {
                id: 11,
                name: 'For Kale Kickstart Juice',
                prepTime: '0 mins',
                cookingTime: '5 mins',
                ingredients  : ['1 orange','1/2 cup strawberries','2 kale leaves','3 carrots','1 ripe banana','ice'],
                recipe: ['Combine all ingredients. Blend until combined well'],
                serves: '1',
                calories: '100kcal',
                src:'kale.png'
            },
            {
                id: 12,
                name: 'For Cucumber Cooler Juice',
                prepTime: '0 mins',
                cookingTime: '5 mins',
                ingredients  : ['1/4 ripe cantaloupe','2 stalk celery','1/2 cucumber','1/4 cup lemon juice','1 ripe banana','ice'],
                recipe: ['Combine all ingredients. Blend until combined well'],
                serves: '1',
                calories: '100kcal',
                src:'cucumber-cooler.png'
            },
            {
                id: 13,
                name: 'Drink Your Greens',
                prepTime: '0 mins',
                cookingTime: '5 mins',
                ingredients  : ['2 cup Spinach','6 celery','2 large cucumber','1/2 lemon','2 medium apples','1-2 inch Ginger','1/2 cup Parsley leaves','ice'],
                recipe: ['Combine all ingredients. Blend until combined well'],
                serves: '1',
                calories: '100kcal',
                src:'drink-your-green.png'
            },
            {
                id: 13,
                name: 'The Detoxifier',
                prepTime: '0 mins',
                cookingTime: '5 mins',
                ingredients  : ['2-3 medium beets','6 carrots','1/2 lemon','2 medium apples','1-2 inch Ginger','ice'],
                recipe: ['Combine all ingredients. Blend until combined well'],
                serves: '1',
                calories: '100kcal',
                src:'detoxifier.png'
            },
           
    
        ];
        this.setState(
            {   recipes: recipes,
                searchQuery: '',
                currentResult: recipes
            }
        );
        //this.state.recipes = recipes;
        //console.log(this.state.recipes)

    }

    SearchItems(e){


      //  console.log('In Search item' + e.target.value);
      //  let arr = this.state.recipes.filter(recipe => recipe.name === e.target.value);
       // console.log(arr);
       // this.setState({ recipes : arr} );
       

    }

    UpdateSearchResult= (event) => {

        let searchString = event.target.value;
        let searchResult = this.state.recipes.filter( recipe => recipe.name.includes(searchString) );

        this.setState(
            {   recipes: this.state.recipes,
                searchQuery: searchString,
                currentResult: searchResult
            }
        );

        if(searchString === '')
        {
            this.setState(
                {   recipes: this.state.recipes,
                    searchQuery: searchString,
                    currentResult: this.state.recipes
                }
            );
        }
       console.log('Search string is'+ searchResult );
    }

    render(){ 
        return(
            <div>
               <input className="search-textfield"
                    type="text" 
                    placeholder="Search Juices"
                    value= {this.state.searchQuery}
                    onChange={this.UpdateSearchResult}
                />
                <div className="recipe__search__container"> 
                { 
                     this.state.currentResult.map((recipe) => 
                        <Recipe    
                            src={recipe.src}
                            name= {recipe.name} 
                            prepTime = {recipe.prepTime} 
                            cookingTime = {recipe.cookingTime}
                            ingredients = {recipe.ingredients}
                            recipe = {recipe.recipe}
                            serves = {recipe.serves}
                            calories = {recipe.calories}
                            /> ) 
                }
                </div>
            </div>
        );
    }

}

export default Search;