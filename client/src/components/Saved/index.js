import React from 'react';
// import "./mainStyle.css";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import {Col, Container, Row} from "../Grid";
// import SearchForm from "../SearchForm/SearchForm";
// import Card from "../../components/Card";
import { List } from "../../components/List";
// import Recipe from "../../components/Recipe";
import CardSave from "../../components/CardSave";
import Nav from "../Nav";
import RecipeSave from "../../components/RecipeSave";
import Footer from "../../components/Footer";

class Saved extends React.Component {
    state = {
        recipes: [],
        beer: [],
        search: "",
        ingredients: "",
        title: "",
        food_pairing: "",
        foodArray: [],
        beerPair: [],
        beerArray:[],
        myArray: [],
        message: "",
        value: "",
        Pair: "",
        source_url:"",
        users: [],
        savedRecipe: [],
        f2f_url: [],
    };


    componentDidMount(){
        this.getSavedRecipes();
        // this.loadSavedRecipes();
       
    }

    getSavedRecipes = () => {
        API.getSavedRecipes()
          .then(res =>
            
            this.setState({
              key: res.data.recipe_id,
              recipes: res.data,
              title: res.data.title
            })
            
          )
          
          .catch(err => console.log(err));
          
      };
    


    render(){
        return (
           
            <Container>
              <Nav />
               <Jumbotron />
               
       
<Row>
<Col size="col-12">
<div className="SavedR">
<CardSave title="Saved Recipes" >
          {this.state.recipes.length ? (
            <List >
              {this.state.recipes.map((recipe, index) => (
                <RecipeSave 
                  key={index}
                  _id={recipe.recipe_id}
                  title={recipe.title}
                  source_url={recipe.source_url}
                  // handleClick={this.saveRecipe}
                  image_url={recipe.image_url}
                //   onClick={this.saveRecipe}
                //   image_url={recipe.image_url}
                //   handleClick={this.handleRecipesave}
                //   buttonText="Save Recipe"
                />
               
              ))}
              
              {/* <button onClick={this.saveRecipe}>save</button> */}
            </List>
          ) : (
            <h2 className="text-center">{this.state.message}</h2>
          )}
        </CardSave>
        </div>
</Col>


</Row>

<Footer />
</Container>

);
};
};












    export default Saved;