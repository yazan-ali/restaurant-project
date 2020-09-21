import React, { Component } from 'react';
import './navbar.css';
import Axios from 'axios';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import withStyles from "@material-ui/core/styles/withStyles";



const styles = theme => ({
  cart:{
  [theme.breakpoints.up("md")]: {
    marginLeft: "750px"
  },
}
})

class Navbar extends Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    Axios.get('https://limitless-beyond-06124.herokuapp.com/logout')
        .then(res => console.log(res.data))
    }

  render(){
    return(
        <>
        <div className="d-none d-md-block">
<ul className="nav regester-nav d-flex flex-row-reverse mt-2">
  {!this.props.userId &&
  <li className="nav-item">
    <a className="regester-link nav-link" href="/register">CREATE AN ACCOUNT </a>
  </li>
  }
  { !this.props.userId &&
  <li className="nav-item">
    <a className="regester-link nav-link" href="/login">LOG IN</a>
  </li>
  }
  {this.props.userId &&
	<li>
	<a className="regester-link nav-link" href="/current-user">Signed In As: {this.props.currentUser} </a>
  </li> 
  }
  {this.props.userId &&
  <li className="nav-item">
    <a onClick={this.handleClick} className="regester-link nav-link" href="/logout">LOG OUT</a>
  </li>
  }
</ul>
    </div>
        <nav id="main" className="navbar navbar-expand-lg navbar-dark main-nav mt-2 ">
     <a className="navbar-brand" href="/pizza-house">Pizza House</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <a  href="/pizza-house/pizza" className="nav-link main-nav-link">Pizza<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link main-nav-link" href="/pizza-house/pasta">Pasta</a>
      </li>
      <li className="nav-item">
        <a className="nav-link main-nav-link" href="/pizza-house/desserts">Desserts</a>
      </li>
      <li className="nav-item">
        <a className="nav-link main-nav-link " href="/pizza-house/deals">Deals</a>
      </li>
      <li className={"nav-item d-block d-md-none "}>
        <a className="nav-link main-nav-link" href={`/cart/user/${this.props.userId}`}> <ShoppingCartIcon /> </a>
      </li>
      </ul>
      <ul className="nav justify-content-end">
      <li className={"nav-item  d-none d-md-block "}>
        <a className="nav-link main-nav-link" href={`/cart/user/${this.props.userId}`}> <ShoppingCartIcon /> </a>
      </li>
    </ul>
    <ul className="nav navbar-nav navbar-right d-md-none">
    {!this.props.userId &&
    <li className="nav-item">
    <a className=" nav-link" href="/register">CREATE AN ACCOUNT </a>
  </li>
  }
  {!this.props.userId &&
  <li className="nav-item">
    <a className=" nav-link" href="/login">LOG IN</a>
  </li>
  }
  {this.props.userId &&
	<li>
	<a className=" nav-link" href="/current-user">Signed In As: {this.props.currentUser} </a>
  </li> 
  }
   {this.props.userId  &&
  <li className="nav-item">
    <a onClick={this.handleClick} className=" nav-link" href="/logout">LOG OUT</a>
  </li>
  }
		  </ul> 
  </div>
</nav>
</>
    );
  };
};

export default withStyles(styles)(Navbar);
