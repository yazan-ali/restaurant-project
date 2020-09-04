import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Card from './card';
import './pizzaList.css';

const styles = theme => ({
    root: {
    marginTop: "3rem",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap"
        }
    },
    pizzaNav: {
      [theme.breakpoints.down("sm")]:{
        bottom:"32px",
      },
      "& a": {
       [theme.breakpoints.down("sm")]:{
        padding:"2px 10px",
       }
      },
    },
  });


class VegetarianPizzaList extends Component{
  constructor(props){
    super(props);
    this.state = {vegetarianPizza: [] }
  }

    render(){
    const { classes } = this.props;
        return(
          <>
           <div className="mt-3">
             <img className="pizza-nav-img" alt="pizza-img" src="https://martjackamstorage.azureedge.net/am-resources/c79bc8ac-4c69-460f-829b-4d40568d0cca/Images/userimages/banners-may/Pizza_Banner-en.jpg" />	
             <ul className={`nav pizza-nav ${classes.pizzaNav}`}>
             <li className="nav-item"><a className="nav-link" href="/pizza-house/pizza">ALL</a></li>	
             <li className="nav-item"><a className="nav-link" href="/pizza-house/pizza/type/beef">BEEF</a></li>	
             <li className="nav-item"><a className="nav-link" href="/pizza-house/pizza/type/chicken">CHICKEN</a></li>	
             <li className="nav-item"><a className="nav-link" href="/pizza-house/pizza/type/vegetarian">VEGETARIAN</a></li>	
             </ul>
           </div>
           <div>
           </div>
            <div className={classes.root}>
            {this.props.pizza.map( (pizza) => (
                <Card
                id={pizza._id}
                 img={pizza.pizza_img} 
                 name={pizza.pizza_name} 
                 description={pizza.pizza_description} 
                 price={pizza.pizza_price} 
                 sizes={[pizza.pizza_size.size_1, pizza.pizza_size.size_2, pizza.pizza_size.size_3]} 
                 types={[pizza.dough_type.type_1, pizza.dough_type.type_2, pizza.dough_type.type_3, pizza.dough_type.type_4, pizza.dough_type.type_5, pizza.dough_type.type_6]}
                 selectItem={true}
                 key={pizza._id}
                 />
           ))}
           </div>
           </>
        );
    }
}

export default withStyles(styles)(VegetarianPizzaList);