import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Card from './card';
import './pizzaList.css';
import axios from 'axios';


const styles = theme => ({
    root: {
    marginTop: "3rem",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap"
        }
    },
    // pizzaNav: {
    //   background: "black",
    //   opacity: "75%", 
    //   color: "white", 
    //   position: "relative",
    //   bottom: "30px",
    //   width: "1110px"
    //   },
    //   pizzaNav: {
    //     "& a": {
    //       color: "white",
    //       padding: "2px 30px",
    //       fontSize: "18px",  
    //     },
    //   },
    //   pizzaNavImg: {
    //   width: "1225px"
    //   },
    //   pizzaNav: {
    //     "& a:hover": {
    //       color: "#c8102e",
    //       textDecoration: "none"
    //     }		 		
    //   }
  });


class VegetarianPizzaList extends Component{
  constructor(props){
    super(props);
    this.state = {vegetarianPizza: [] }
  }

  componentDidMount(){
    axios.get('https://limitless-beyond-06124.herokuapp.com/pizza-house/pizza/type/vegetarian')
    .then(res => {
      if(res.data.length >0){
        this.setState({vegetarianPizza: res.data})
      }
    });
  }

    render(){
    const { classes } = this.props;
        return(
          <>
           <div className="d-none d-sm-block mt-3">
             <img style={{width: "100%"}} className="pizza-nav-img" alt="pizza-img" src="https://martjackamstorage.azureedge.net/am-resources/c79bc8ac-4c69-460f-829b-4d40568d0cca/Images/userimages/banners-may/Pizza_Banner-en.jpg" />	
             <ul className="nav pizza-nav">
             <li className="nav-item"><a className="nav-link" href="/pizza">ALL</a></li>	
             <li className="nav-item"><a className="nav-link" href="/pizza/type/beef">BEEF</a></li>	
             <li className="nav-item"><a className="nav-link" href="/pizza/type/chicken">CHICKEN</a></li>	
             <li className="nav-item"><a className="nav-link" href="/pizza/type/vegetarian">VEGETARIAN</a></li>	
             </ul>
           </div>
           <div>
           </div>
            <div className={classes.root}>
            {this.state.vegetarianPizza.map( (pizza) => (
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