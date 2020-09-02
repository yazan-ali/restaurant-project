import React, { Component } from 'react';
import './navbar.css';
import Axios from 'axios';

class Navbar extends Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    Axios.get('http://localhost:5000/logout')
        .then(res => console.log(res.data))
    }

  render(){
    return(
        <>
        <div className="d-none d-md-block">
<ul className="nav regester-nav d-flex flex-row-reverse mt-2">
  	{/* <div>
  		<img src="https://voixdedeuxrives.com/wp-content/uploads/2018/04/halal.png " width="30" height="30">
  	</div> */}
  <li className="nav-item">
    <a className="regester-link nav-link active" href="/find">FIND A PIZZA HUT</a>
  </li>
  <li className="nav-item">
    <a className="regester-link nav-link" href="/register">CREATE AN ACCOUNT </a>
  </li>
  <li className="nav-item">
    <a className="regester-link nav-link" href="/login">LOG IN</a>
  </li>
	<li>
	<a className="regester-link nav-link" href="/current-user">Signed In As: {this.props.currentUser} </a>
	</li> 
  <li className="nav-item">
    <a onClick={this.handleClick} className="regester-link nav-link" href="/logout">LOG OUT</a>
  </li>

</ul>
    </div>
        <nav id="main" className="navbar navbar-expand-lg navbar-dark main-nav mt-2 ">
     <a className="navbar-brand" href="/">Pizza House</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <a  href="/pizza" className="nav-link main-nav-link">Pizza<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link main-nav-link" href="/pasta">Pasta</a>
      </li>
      <li className="nav-item">
        <a className="nav-link main-nav-link" href="/desserts">Desserts</a>
      </li>
      <li className="nav-item">
        <a className="nav-link main-nav-link " href="/deals">Deals</a>
      </li>
      <li className="nav-item">
    <a className="nav-link main-nav-link" href={`/cart/${this.props.userId}`}>Shoping Cart</a>
      </li>
    </ul>
    <ul className="nav navbar-nav navbar-right d-md-none">
    <li className="nav-item">
    <a className=" nav-link" href="/register">CREATE AN ACCOUNT </a>
  </li>
  <li className="nav-item">
    <a className=" nav-link" href="/login">LOG IN</a>
  </li>
	<li>
	<a className=" nav-link" href="/current-user">Signed In As: {this.props.currentUser} </a>
	</li> 
  <li className="nav-item">
    <a onClick={this.handleClick} className=" nav-link" href="/logout">LOG OUT</a>
  </li>
		  </ul> 
  </div>
</nav>
</>
    );
  };
};

export default Navbar;
