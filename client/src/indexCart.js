import React, { Component } from 'react';
import Axios from 'axios';
import CartCard from './cartCard';

class Cart extends Component{
    constructor(props){
        super(props);
        this.state={items: []}
        this.handleDelete = this.handleDelete.bind(this);
        Axios.get(`https://limitless-beyond-06124.herokuapp.com/cart/${this.props.match.params.id}`)
        .then(res => {
            if(res.data.length > 0){
                this.setState({items: res.data})
            }
        });
    }

    handleDelete(id){
        Axios.delete(`https://limitless-beyond-06124.herokuapp.com/cart/${id}`)
       .then(res => console.log(res.data));
       this.setState({
         items: this.state.items.filter(item => item._id !== id)
       });
     };

    render(){
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