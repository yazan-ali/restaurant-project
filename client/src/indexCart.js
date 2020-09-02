import React, { Component } from 'react';
import Axios from 'axios';
// import withStyles from "@material-ui/core/styles/withStyles";
import CartCard from './cartCard';

// const styles = theme => ({
//     root: {
//         display: "flex",
//         flexDirection: "column",
//         width: "50%",
//         margin: "2rem auto",
//         border: "2px #CCCCCC solid",
//         padding: theme.spacing(2),
//         borderRadius: "1rem"
//     },
//     header: {
//         display: "flex"
//     },
//     name_description: {
//         marginLeft: theme.spacing(3),
//         marginTop: theme.spacing(3)
//     },
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//     },
// })

class Cart extends Component{
    constructor(props){
        super(props);
        this.state={items: []}
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){
        Axios.get(`http://localhost:5000/cart/${this.props.match.params.id}`)
        .then(res => {
            if(res.data.length > 0){
                this.setState({items: res.data})
                console.log(res.data)
            }
        });
    }

    handleDelete(id){
        Axios.delete(`http://localhost:5000/cart/${id}`)
       .then(res => console.log(res.data));
       this.setState({
         items: this.state.items.filter(item => item._id !== id)
       });
     };

    render(){
        console.log(this.state.items)
        return(
            <div>
                {this.state.items.map(item => (
                  <CartCard 
                  id = {item._id}
                  key={item._id}
                  mealType = {item.cartItem.mealType}
                  img = {item.cartItem.img}
                  name = {item.cartItem.name}
                  description = {item.cartItem.description}
                  size = {item.cartItem.size}
                  type = {item.cartItem.type}
                  total = {(item.cartItem.total)}
                  drink = {(item.cartItem.drink).toUpperCase()}
                  starters = {item.cartItem.addOne}
                  handleDelete = {this.handleDelete}
                  />
                ))}
            </div>
        );
    };
};

export default Cart;