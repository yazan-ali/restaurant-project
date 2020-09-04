import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Card from './card';
import './pizzaList.css';
import Axios from 'axios';


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
      headerImg: {
        [theme.breakpoints.down("sm")]:{
          height: "120px"
        },
      }
  });


class PizzaList extends Component{
  constructor(props){
    super(props);
    this.state = {pizza: [], user: []}
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id){
    this.props.isAdmin && Axios.delete(`https://limitless-beyond-06124.herokuapp.com/pizza/${id}`)
    .then(res => console.log(res.data));
    this.setState({
      pizza: this.props.pizza.filter(pizza => pizza._id !== id)
    });
  };

    render(){
    const { classes } = this.props;
        return(
          <>
           <div className="mt-3">
             <img className={`pizza-nav-img ${classes.headerImg}`}  alt="pizza-img" src="https://martjackamstorage.azureedge.net/am-resources/c79bc8ac-4c69-460f-829b-4d40568d0cca/Images/userimages/banners-may/Pizza_Banner-en.jpg" />	
             <ul className={`nav pizza-nav ${classes.pizzaNav}`}>
             <li className="nav-item"><a className="nav-link" href="/pizza-house/pizza">ALL</a></li>	
             <li className="nav-item"><a className="nav-link" href="/pizza-house/pizza/type/beef">BEEF</a></li>	
             <li className="nav-item"><a className="nav-link" href="/pizza-house/pizza/type/chicken">CHICKEN</a></li>	
             <li className="nav-item"><a className="nav-link" href="/pizza-house/pizza/type/vegetarian">VEGETARIAN</a></li>	
             </ul>
           </div>
           {this.props.isAdmin && (<div>
           <a className="btn btn-danger mt-3" href='/pizza/new/add'>add pizza</a>
           </div>)}
           {/* <a href={`/cart/${this.props.userId}`}>Cart</a> */}
            <div className={classes.root}>
            {this.props.pizza.map( (pizza, i) => (
                <Card
                id={pizza._id}
                 img={pizza.pizza_img} 
                 name={pizza.pizza_name} 
                 description={pizza.pizza_description} 
                 price={pizza.pizza_price} 
                 sizes={[pizza.pizza_size.size_1, pizza.pizza_size.size_2, pizza.pizza_size.size_3]} 
                 types={[pizza.dough_type.type_1, pizza.dough_type.type_2, pizza.dough_type.type_3, pizza.dough_type.type_4, pizza.dough_type.type_5, pizza.dough_type.type_6]}
                 showDialog={true}
                 selectItem={true}
                 index={i}
                 formType="pizza"
                 handleDelete={this.handleDelete}
                 isAdmin={this.props.isAdmin}
                 userId={this.props.userId}
                 key={pizza._id}
                 />
           ))}
           </div>
           </>
        );
    }
}

export default withStyles(styles)(PizzaList);