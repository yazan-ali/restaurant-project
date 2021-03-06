import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import Container from './container';
import PizzaList from './pizzaList';
import BeefPizzaList from './beefPizza';
import ChickenPizzaList from './chickenPizza';
import VegetarianPizzaList from './vegetarianPizza';
import PastaList from './pastaList';
import DessertList from './dessertList';
import DealsList from './dealsList';
import CreatePizza from './createPizza';
import EditPizza from './editPizza';
import CreatePasta from './createPasta';
import EditPasta from './editPasta';
import EditDessert from './editDessert';
import CreateDessert from './createDessert';
import EditDeal from './editDeal';
import EditStarter from './editStarter';
import CreateDeal from './createDeal';
import CreateStarters from './createAddOns';
import Register from './register';
import AdminRegister from './adminRegister';
import Login from './login';
import Cart from './indexCart';
import LandingPage from './landingPage';
import Axios from 'axios';
import "./App.css"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pizza: [], beefPizza: [], chickenPizza: [], vegetarianPizza: [], pasta: [], dessert: [], user: [], deals: [], starters: [] }
    this.handleDeletePizza = this.handleDeletePizza.bind(this);
    this.handleDeletePasta = this.handleDeletePasta.bind(this);
    this.handleDeleteDessert = this.handleDeleteDessert.bind(this);
    this.handleDeleteDeal = this.handleDeleteDeal.bind(this);
  }

  componentDidMount() {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "https://limitless-beyond-06124.herokuapp.com/user",
    }).then((res) => {
      this.setState({ user: res.data });
    });

    // get all pizza
    Axios.get('https://limitless-beyond-06124.herokuapp.com/pizza')
      .then(res => {
        if (res.data.length > 0) {
          this.setState({ pizza: res.data })
        }
      });
    // all beef pizza
    Axios.get('https://limitless-beyond-06124.herokuapp.com/pizza/type/beef')
      .then(res => {
        if (res.data.length > 0) {
          this.setState({ beefPizza: res.data })
        }
      });
    // all chicken pizza
    Axios.get('https://limitless-beyond-06124.herokuapp.com/pizza/type/chicken')
      .then(res => {
        if (res.data.length > 0) {
          this.setState({ chickenPizza: res.data })
        }
      });
    // all vegetarian pizza
    Axios.get('https://limitless-beyond-06124.herokuapp.com/pizza/type/vegetarian')
      .then(res => {
        if (res.data.length > 0) {
          this.setState({ vegetarianPizza: res.data })
        }
      });
    // get all pasta 
    Axios.get('https://limitless-beyond-06124.herokuapp.com/pasta')
      .then(res => {
        if (res.data.length > 0) {
          this.setState({ pasta: res.data })
        }
      });

    // get all dessert
    Axios.get('https://limitless-beyond-06124.herokuapp.com/desserts')
      .then(res => {
        if (res.data.length > 0) {
          this.setState({ dessert: res.data })
        }
      });
    // get all deals
    Axios.get('https://limitless-beyond-06124.herokuapp.com/deals')
      .then(res => {
        if (res.data.length > 0) {
          this.setState({ deals: res.data })
        }
      });
    // get all starter
    Axios.get('https://limitless-beyond-06124.herokuapp.com/starters')
      .then(res => {
        if (res.data.length > 0) {
          this.setState({ starters: res.data })
        }
      });
  }

  handleDeletePizza(id) {
    this.state.user.isAdmin && Axios.delete(`https://limitless-beyond-06124.herokuapp.com/pizza/${id}`)
      .then(res => console.log(res.data));
    this.setState({
      pizza: this.state.pizza.filter(pizza => pizza._id !== id)
    });
  };

  handleDeletePasta(id) {
    this.state.user.isAdmin && Axios.delete(`https://limitless-beyond-06124.herokuapp.com/pasta/${id}`)
      .then(res => console.log(res.data));
    this.setState({
      pasta: this.state.pasta.filter(pasta => pasta._id !== id)
    });
  };

  handleDeleteDessert(id) {
    this.state.user.isAdmin && Axios.delete(`https://limitless-beyond-06124.herokuapp.com/desserts/${id}`)
      .then(res => console.log(res.data));
    this.setState({
      dessert: this.state.dessert.filter(dessert => dessert._id !== id)
    });
  };

  handleDeleteDeal(id) {
    this.state.user.isAdmin && Axios.delete(`https://limitless-beyond-06124.herokuapp.com/deal/${id}`)
      .then(res => console.log(res.data));
    this.setState({
      deals: this.state.deals.filter(deal => deal._id !== id)
    });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Switch>
          <Container>
            <Navbar currentUser={user.user_name} userId={user.id} />
            <Route exact path="/" render={() => <LandingPage />} />
            <Route exact path="/pizza-house/pizza" render={() => <PizzaList pizza={this.state.pizza} isAdmin={user.isAdmin} userId={user.id} handleDelete={this.handleDeletePizza} />} />
            <Route exact path="/pizza-house/pizza/type/beef" render={() => <BeefPizzaList pizza={this.state.beefPizza} isAdmin={user.isAdmin} userId={user.id} handleDelete={this.handleDeletePizza} />} />
            <Route exact path="/pizza-house/pizza/type/chicken" render={() => <ChickenPizzaList pizza={this.state.chickenPizza} isAdmin={user.isAdmin} userId={user.id} handleDelete={this.handleDeletePizza} />} />
            <Route exact path="/pizza-house/pizza/type/vegetarian" render={() => <VegetarianPizzaList pizza={this.state.vegetarianPizza} isAdmin={user.isAdmin} userId={user.id} handleDelete={this.handleDeletePizza} />} />
            <Route exact path="/pizza/new/add" render={() => <CreatePizza isAdmin={user.isAdmin} />} />
            {this.state.pizza.map((pizza, i) => (
              <Route exact path={`/pizza/edit${i}/:id`} render={() => <EditPizza isAdmin={user.isAdmin}
                id={pizza._id} pizza={pizza} />} />
            ))}
            <Route exact path="/pizza-house/pasta" render={() => <PastaList pasta={this.state.pasta} isAdmin={user.isAdmin} userId={user.id} handleDelete={this.handleDeletePasta} />} />
            <Route exact path="/pasta/new" render={() => <CreatePasta isAdmin={user.isAdmin} />} />
            {this.state.pasta.map((pasta, i) => (
              <Route exact path={`/pasta/edit${i}/:id`} render={() => <EditPasta isAdmin={user.isAdmin}
                id={pasta._id} pasta={pasta} />} />
            ))}
            <Route exact path="/pizza-house/desserts" render={() => <DessertList dessert={this.state.dessert} isAdmin={user.isAdmin} userId={user.id} handleDelete={this.handleDeleteDessert} />} />
            <Route exact path="/desserts/new" render={() => <CreateDessert isAdmin={user.isAdmin} />} />
            {this.state.dessert.map((dessert, i) => (
              <Route exact path={`/desserts/edit${i}/:id`} render={() => <EditDessert isAdmin={user.isAdmin}
                id={dessert._id} dessert={dessert} />} />
            ))}
            <Route exact path="/starters/new" render={() => <CreateStarters isAdmin={user.isAdmin} />} />
            <Route exact path="/pizza-house/deals" render={() => <DealsList deals={this.state.deals} isAdmin={user.isAdmin} userId={user.id} handleDelete={this.handleDeleteDeal} />} />
            <Route exact path="/deal/new" render={() => <CreateDeal isAdmin={user.isAdmin} />} />
            {this.state.deals.map((deal, i) => (
              <Route exact path={`/deals/edit${i}/:id`} render={() => <EditDeal isAdmin={user.isAdmin} id={deal._id} deals={deal} />} />
            ))}
            {this.state.starters.map((starter, i) => (
              <Route exact path={`/starters/edit${i}/:id`} render={() => <EditStarter isAdmin={user.isAdmin} id={starter._id} starter={starter} />} />
            ))}
            <Route exact path="/register" render={() => <Register />} />
            <Route exact path="/register/admin" render={() => <AdminRegister />} />
            <Route exact path="/login" render={(routeProps) => <Login {...routeProps} />} />
            <Route exact path='/cart/user/:id' render={(routeProps) => <Cart {...routeProps} userId={user.id} />} />
          </Container>
        </Switch>
      </div>
    );
  };
};

export default App;
