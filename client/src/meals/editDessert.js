import React, { Component } from 'react';
import Axios from 'axios';
import TextField from '@material-ui/core/TextField';

class EditDessert extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirect: null,
            dessert_img: this.props.dessert.dessert_img,
            dessert_name: this.props.dessert.dessert_name,
            dessert_description: this.props.dessert.dessert_description,
            dessert_price: this.props.dessert.dessert_price
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e){
        e.preventDefault();
        const updatedDessert = {
            type: this.state.dessert_type,
            img: this.state.dessert_img,
            name: this.state.dessert_name,
            description: this.state.dessert_description,
            price: this.state.dessert_price
        }
        this.props.isAdmin && Axios.put(`http://localhost:5000/desserts/${this.props.id}`, updatedDessert)
        .then(res => console.log(res.data))
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
              <TextField
                  id="standard-secondary"                 
                  label="dessert img"
                  color="secondary"
                  name="dessert_img"
                  value={this.state.dessert_img} 
                  onChange={this.handleChange}
                  margin="normal" 
                  variant="filled"
                  fullWidth
                />
              <TextField
                  id="standard-secondary"                 
                  label="dessert name"
                  color="secondary"
                  name="dessert_name"
                  value={this.state.dessert_name} 
                  onChange={this.handleChange}
                  margin="normal" 
                  variant="filled"
                  fullWidth
                />
              <TextField
                  id="standard-secondary"                 
                  label="dessert description"
                  color="secondary"
                  name="dessert_description"
                  value={this.state.dessert_description} 
                  onChange={this.handleChange}
                  margin="normal" 
                  variant="filled"
                  fullWidth
                />
              <TextField
                  id="standard-secondary"                 
                  label="dessert price"
                  color="secondary"
                  name="dessert_price"
                  value={this.state.dessert_price} 
                  onChange={this.handleChange}
                  margin="normal" 
                  variant="filled"
                  fullWidth
                />
            <button className="btn btn-danger" type="submit" variant="contained" color="secondary">Update</button>
       </form>
        );
    };
};

export default EditDessert;