import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import Container from './container';
import PizzaList from './meals/pizzaList';
import BeefPizzaList from './meals/beefPizza';
import ChickenPizzaList from './meals/chickenPizza';
import VegetarianPizzaList from './meals/vegetarianPizza';
import PastaList from './meals/pastaList';
import DessertList from './meals/dessertList';
import CreatePizza from './meals/createPizza';
import EditPizza from './meals/editPizza';
import CreatePasta from './meals/createPasta';
import EditPasta from './meals/editPasta';
import EditDessert from './meals/editDessert';
import CreateDessert from './meals/createDessert';
import CreateStarters from './meals/createAddOns';
import Register from './register';
import AdminRegister from './adminRegister';
import Login from './login'; 
import Cart from './indexCart';
import Axios from 'axios';


class App extends Component{
  constructor(props){
    super(props);
    this.state={pizza: [], pasta: [], dessert: [], user: ""}
  }

  componentDidMount(){
    Axios.get('http://localhost:5000/pizza')
    .then(res => {
      if(res.data.length >0){
        this.setState({pizza: res.data})
      }
    });
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/user",
    }).then((res) => {
      this.setState({user: res.data});
      console.log(res.data);
    });    

    // get all pizza
    Axios.get('http://localhost:5000/pizza')
    .then(res => {
      if(res.data.length >0){
        this.setState({pizza: res.data})
      }
    });
    // get all pasta 
    Axios.get('http://localhost:5000/pasta')
    .then(res => {
      if(res.data.length >0){
        this.setState({pasta: res.data})
      }
    });
   
    // get all dessert
    Axios.get('http://localhost:5000/desserts')
    .then(res => {
      if(res.data.length >0){
        this.setState({dessert: res.data})
      }
    });
  }

  render(){
   const { user } = this.state;
    return(
      <div>
        <Switch>
        <Container>
          <Navbar currentUser={user.user_name} userId={user.id} />
          <Route exact path="/" render={() => <PizzaList isAdmin={user.isAdmin} userId={user.id} />}/>
          <Route exact path="/client/pizza" render={() => <PizzaList pizza={this.state.pizza} isAdmin={user.isAdmin} userId={user.id}  />}/>
          <Route exact path="/pizza/type/beef" render={() => <BeefPizzaList />}/>
          <Route exact path="/pizza/type/chicken" render={() => <ChickenPizzaList />}/>
          <Route exact path="/pizza/type/vegetarian" render={() => <VegetarianPizzaList />}/>
          <Route exact path="/pizza/new" render={() => <CreatePizza isAdmin={user.isAdmin} />}/>
          {this.state.pizza.map((pizza, i) => (
              <Route exact path={`/pizza/edit${i}/:id`} render={(routeProps) => <EditPizza isAdmin={user.isAdmin}
               id={pizza._id} pizza={pizza} />}/>
          ))}
          <Route exact path="/pasta" render={() => <PastaList isAdmin={user.isAdmin} userId={user.id} />}/>
          <Route exact path="/pasta/new" render={() => <CreatePasta isAdmin={user.isAdmin} />}/>
          {this.state.pasta.map((pasta, i) => (
              <Route exact path={`/pasta/edit${i}/:id`} render={(routeProps) => <EditPasta isAdmin={user.isAdmin} 
              id={pasta._id} pasta={pasta} />}/>
          ))}
          <Route exact path="/desserts" render={() => <DessertList isAdmin={user.isAdmin} userId={user.id} />}/>
          <Route exact path="/desserts/new" render={() => <CreateDessert isAdmin={user.isAdmin} />}/>
          {this.state.dessert.map((dessert, i) => (
              <Route exact path={`/desserts/edit${i}/:id`} render={(routeProps) => <EditDessert isAdmin={user.isAdmin}
              id={dessert._id} dessert={dessert} />}/>
          ))}
          <Route exact path="/starters/new" render={() => <CreateStarters isAdmin={user.isAdmin} />}/>
          <Route exact path="/register" render={() => <Register />}/>
          <Route exact path="/register/admin" render={() => <AdminRegister />}/>
          <Route exact path="/login" render={(routeProps) => <Login {...routeProps} />}/>
          <Route exact path='/cart/:id' render={ (routeProps) => <Cart {...routeProps} />}/>
        </Container>
        </Switch>
      </div>
    );
  };
};

export default App;
