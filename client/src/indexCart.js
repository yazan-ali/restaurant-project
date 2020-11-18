import React, { Component } from 'react';
import Axios from 'axios';
import CartCard from './cartCard';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], loginDialog: false }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    Axios.get(`https://limitless-beyond-06124.herokuapp.com/cart/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ items: res.data })
      });
    setTimeout(() => {
      if (!this.props.userId) {
        this.setState({ loginDialog: true })
      }
    }, 1000)
  }

  handleClose() {
    this.setState({ loginDialog: false })
  }

  handleDelete(id) {
    Axios.delete(`https://limitless-beyond-06124.herokuapp.com/cart/${id}`)
      .then(res => console.log(res.data));
    this.setState({
      items: this.state.items.filter(item => item._id !== id)
    });
  };

  render() {
    return (
      <div>
        {this.state.items.map(item => (
          <CartCard
            id={item._id}
            key={item._id}
            mealType={item.cartItem.mealType}
            img={item.cartItem.img}
            name={item.cartItem.name}
            description={item.cartItem.description}
            size={item.cartItem.size}
            type={item.cartItem.type}
            total={(item.cartItem.total)}
            drink={(item.cartItem.drink).toUpperCase()}
            starters={item.cartItem.addOne}
            handleDelete={this.handleDelete}
          />
        ))}
        <Dialog
          open={this.state.loginDialog}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You should be logged in to see the shopping cart
                 </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
                 </Button>
            <Button color="primary"><a style={{ color: "#3f51b5", textDecoration: "none" }} href="/login">Login</a></Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };
};

export default Cart;