import React, { Component } from 'react';
import Axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class EditStarter extends Component{
    constructor(props){
        super(props);
        this.state = {
            starter_name: this.props.starter.starter_name,
            starter_price: this.props.starter.starter_price
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e){
        e.preventDefault();
        const updatedstarter = {
            name: this.state.starter_name,
            price: this.state.starter_price
        }
        Axios.put(`https://limitless-beyond-06124.herokuapp.com/starters/${this.props.id}`, updatedstarter)
        .then(res => console.log(res.data))
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
              <TextField
                  id="standard-secondary"                 
                  label="starter name"
                  color="secondary"
                  name="starter_name"
                  value={this.state.starter_name} 
                  onChange={this.handleChange}
                  margin="normal" 
                  variant="filled"
                  fullWidth
                />
              <TextField
                  id="standard-secondary"                 
                  label="starter price"
                  color="secondary"
                  name="starter_price"
                  value={this.state.starter_price} 
                  onChange={this.handleChange}
                  margin="normal" 
                  variant="filled"
                  fullWidth
                />
            <Button type="submit" variant="contained" color="secondary">Update Starter</Button>
       </form>
        );
    };
};

export default EditStarter;