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
                this.setState({ beerName: res.data[0].name,
                beerId: res.data[0].id,
                beerPair: res.data[0].food_pairing,
                 beerDesc: res.data[0].description,
                 beerTips: res.data[0].brewers_tips,
                 beerImg: res.data[0].image_url,
                 beerDate: res.data[0].first_brewed,
                 beerTagline: res.data[0].tagline,
                 beerAbv: res.data[0].abv
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
    {/* <Card>
        <List> */}
    {/* <div id="recipeCard">
      { this.state.recipes.map(recipes => <li onClick={this.recipeSave} key={recipes.recipe_id} id={recipes.recipe_id}>  {recipes.title}</li>)}
   </div>   */}
 {/* </List>
 </Card> */}
  {/* <div> 
    { this.state.foodArray.map(foodArray => <li  key={foodArray.id} id={foodArray._id}></li>)}
 </div>  */}
 

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
        <p className="P5">{ this.state.beerPair.map((beerPair, index) => <a href="https://www.google.com/search?q="  key={index} ><li onClick={this.beerLink} key={index} id={beerPair.beerPair_id} > {beerPair} </li></a>)}</p>
        {/* <p>It can even be another Collapsible component. Check out the next section!</p> */}
        </Collapsible>
        <Collapsible  transitionTime={500} easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'} trigger="Mmmmm, A nice description">
        <p className="P5">{this.state.beerDesc}</p>
          {/* <p>And there's no limit to how many levels deep you go. Or how many you have on the same level.</p> */}
          </Collapsible>
           <Collapsible  transitionTime={500} easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'} trigger="Some tips from the brewer">
        <p className="P5">{this.state.beerTips}</p>
        <div>
        <button onClick={this.onOpenModal}>Some of the finer points</button>
        <Modal  open={open} onClose={this.onCloseModal} center>
          {/* <h2>{ this.state.beerPair.map((beerPair, index) => <a href="https://www.google.com/search?q="  key={index} ><li onClick={this.beerLink} key={index} id={beerPair.beerPair_id} > {beerPair} </li></a>)}</h2> */}

          <h3 className="Mwords">   Some of the fine print  </h3>
                         ---------------------------------------
          <h3 className="Mwords">Date it was first brewed:  {this.state.beerDate}</h3> 
          ---------------------------------------------------------------------------
          <h3 className="Mwords">This beers ABV:  {this.state.beerAbv}</h3>
          ---------------------------------------------------------------------------
          <h3 className="Mwords">The famous Tagline:  {this.state.beerTagline}</h3>
        </Modal>
      </div>
          {/* <p>And there's no limit to how many </p> */}
     
      </Collapsible>
      </div>
{/* <div className="col-4"> */}
  {/* <div><h1>{this.state.beerImg}</h1></div> */}
  <div className="frameWork">
  <h1 id="beerName">{this.state.beerName} </h1>
  {/* <h1 id="beerName">{this.state.beerTips} </h1> */}
  <img  id="imageHolder"  src={this.state.beerImg} alt="" className="img-responsive" />
  {/* <h2 id="description">{this.state.beerDesc}</h2> */}
  </div>
  
  
{/* </div>  */}
{/* </div> */}
{/* </div> */}
</div> 
{/* <div>
        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>{ this.state.beerPair.map((beerPair, index) => <a href="https://www.google.com/search?q="  key={index} ><li onClick={this.beerLink} key={index} id={beerPair.beerPair_id} > {beerPair} </li></a>)}</h2>
        </Modal>
      </div> */}
      {/* <div> */}
{/* <Link to="/Saved">Go to Saved Recipes</Link> */}
{/* </div> */}
{/* <Link to="/Home">Go here to LogOut</Link> */}
</Col>
{/* <Col size="md-4"> */}
           
          {/* </Col> */}
</Row>
{/* </div> */}
<Footer />
</Container>

);
};
};

export default Main;