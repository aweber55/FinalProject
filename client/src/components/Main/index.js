import React from 'react';
import "./mainStyle.css";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import {Col, Container, Row} from "../Grid";
import SearchForm from "../SearchForm/SearchForm";
import Card from "../../components/Card";
import { List } from "../../components/List";
import Recipe from "../../components/Recipe";
import Footer from "../../components/Footer";
// import {Link} from 'react-router-dom';
// import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import Collapsible from 'react-collapsible';
import Nav from "../Nav";

class Main extends React.Component {
    state = {
      open: false,
        recipes: [],
        beer: [],
        search: "",
        ingredients: "",
        title: "",
        food_pairing: "",
        foodArray: [],
        beerPair: [],
        beerArray:[],
        beerTips: "",
        myArray: [],
        message: "",
        value: "",
        Pair: "",
        source_url:"",
        users: [],
        savedRecipe: [],
        
       
    };

    
    componentDidMount(){
        // this.getSavedRecipes();
        // this.loadSavedRecipes();
        // document.body.className="body-component-a" // Or set the class
    }
    onOpenModal = () => {
      this.setState({ open: true });
    };
   
    onCloseModal = () => {
      this.setState({ open: false });
    };
  



    getSavedRecipes = () => {
        API.getSavedRecipes()
          .then(res =>
            
            this.setState({
                
              recipes: res.data
              
            })
            
          )
          
          .catch(err => console.log(err));
          
      };
    
    saveRecipe = (recipes) => {
        let newRecipe = {
          title: recipes.title,
          // recipe: recipe.recipe,
          source_url: recipes.source_url,
          
        //   is_saved: true
        }
    console.log(recipes.title);
        API
          .saveRecipe(newRecipe)
          .then(results => {
            console.log(results);
            
          })
          .catch(err => console.log(err));
      }
    
        
    
    getFood = (keyword) => {
      
        this.setState({ search: keyword})
       
        
        API.getFood(this.state.search)
        .then(res => {
            this.setState({ search: ""});
            // let {foodArray} = this.state;
            //     this.state.foodArray.push(res.data);
                
            console.log(res.data.recipes);
            // console.log(res.data.recipes[0].title);
            this.setState({ recipes: res.data.recipes })
            
            // this.setState({
            //             //   foodUrl: res.data.f2f_url,  
            //               title: res.data.title,
            //               recipe: res.data.recipes,
            //                 source_url: res.data.source_url,
            //             })
            
        })};
    

    
        
    

        
        getBeer = (keyword) => {
          
            this.setState({ search: keyword})
           
            
            // console.log(this.state.search);
            API.getBeer(this.state.search)
            
            .then(res => {
              
                let {beer} = this.state;
                
                this.state.beer.push(res.data);
                this.setState({ beerName: res.data[1].name,
                beerId: res.data[1].id,
                beerPair: res.data[1].food_pairing,
                 beerDesc: res.data[1].description,
                 beerTips: res.data[1].brewers_tips,
                 beerImg: res.data[1].image_url,
                 beerDate: res.data[1].first_brewed,
                 beerTagline: res.data[1].tagline,
                 beerAbv: res.data[1].abv
                })  
                
                this.setState({ beer: res.data});
            console.log(beer);
            })
                .catch(err => 
                    
                    console.log(err));
                };
                
               
                
                handleInputChange = event => {
                    this.setState({ search: event.target.value });
                    
                  };

                  handleFormSubmit = event => {
                    event.preventDefault();
                    
                    this.getFood();
                    this.getBeer();
                    this.setState({ search: ""});
                    
                }
                        

          render(){
            const { open } = this.state;
            return (
               
                <Container>
                  <Nav />
                   <Jumbotron />
                   
           
<Row>
  
    <Col size="col-4">
    <Card title="Recipes" >
              {this.state.recipes.length ? (
                <List >
                  {this.state.recipes.map(recipe => (
                    <Recipe
                      key={recipe.recipe_id}
                      _id={recipe.recipe_id}
                      title={recipe.title}
                      source_url={recipe.source_url}
                      handleClick={this.saveRecipe}
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
            </Card>
    
 

</Col>
<Col size='col-4' >
<span >
  <div id="handleForm">
<SearchForm 
    handleFormSubmit={this.handleFormSubmit}
    handleInputChange={this.handleInputChange}/>
    </div>
    </span>
    </Col>

<Col size="col-4" >
<div className="displayImage">
<div className="col-sm-12 smaller">
      <Collapsible id="collapsible"  transitionTime={500} easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'} trigger="Check out BrewDog's recipe suggestions">
        <p className="P5">{ this.state.beerPair.map((beerPair, index) => {
          let url = "https://www.google.com/search?q=" + beerPair;
        return <a href={url} id="whiteText" target="_blank" rel="noopener noreferrer" key={index} ><li  key={index} id={beerPair.beerPair_id} > {beerPair} </li></a>})}</p>
        
        </Collapsible>
        <Collapsible  transitionTime={500} easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'} trigger="Mmmmm, A nice description">
        <p className="P5">{this.state.beerDesc}</p>
          
          </Collapsible>
           <Collapsible  transitionTime={500} easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'} trigger="Some tips from the brewer">
        <p className="P5">{this.state.beerTips}</p>
        <div>
        <button id="modalBtn" onClick={this.onOpenModal}>Some of the finer points</button>
        <Modal  open={open} onClose={this.onCloseModal} center>
         

          <h3 className="Mwords">   Some of the fine print  </h3>
                         ---------------------------------------
          <h3 className="Mwords">Date it was first brewed:  {this.state.beerDate}</h3> 
          ---------------------------------------------------------------------------
          <h3 className="Mwords">The ABV (Alcohol by volume) for this beer:  {this.state.beerAbv}</h3>
          ---------------------------------------------------------------------------
          <h3 className="Mwords">The famous Tagline:  {this.state.beerTagline}</h3>
        </Modal>
      </div>
         
     
      </Collapsible>
      </div>

  <div className="frameWork">
  
  <h1 id="beerName">{this.state.beerName} </h1>
  
  <img  id="imageHolder"  src={this.state.beerImg} alt="" className="img-responsive" />
  
  </div>
  
  

</div> 

</Col>

</Row>

<Footer />
</Container>

);
};
};

export default Main;