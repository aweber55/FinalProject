import React from 'react';
import "./homestyle.css";
import Jumbotron from "../Jumbotron/";
import {Col, Container, Row} from "../Grid";
import {Link} from 'react-router-dom';

const Home = (props) =>{
	return (
		
<div className="Home">
		<Container>
		{/* <Nav /> */}
		<Jumbotron />
		<Row>
		<Col size="col-12">
		<div className="container home">
		<div className="col-4 center-block" id="signIn">
		{/* <div className="home" > */}
			{/* <h1>You should only see this if you are logged in!</h1> */}
			<h2>Welcome to the Best Craft Beer and Food Pairing App!</h2>
			<h2>{props.auth.username}</h2>
			<button  className="btnSign" onClick = {props.handleLogout}>Log Out</button>
			<Link to = "/Main" >
			<button  className="btnSign" type="button">Lets get Started</button>
	 		</Link>
			</div>
			</div>
			{/* </div> */}
			</Col>
			</Row>
		
		</Container>
		</div>
	);
};

export default Home;