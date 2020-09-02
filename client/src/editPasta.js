import React, { Component } from 'react';
import Axios from 'axios';
import TextField from '@material-ui/core/TextField';


class CreatePasta extends Component{
    constructor(props){
        super(props);
        this.state = {
            pasta_img: this.props.pasta.pasta_img,
            pasta_name: this.props.pasta.pasta_name,
            pasta_description: this.props.pasta.pasta_description,
            pasta_price: this.props.pasta.pasta_price
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e){
        e.preventDefault();
        const updatedPasta = {
            type: this.state.pasta_type,
            img: this.state.pasta_img,
            name: this.state.pasta_name,
            description: this.state.pasta_description,
            price: this.state.pasta_price
        }
       this.props.isAdmin &&  Axios.put(`https://limitless-beyond-06124.herokuapp.com/pasta/${this.props.id}`, updatedPasta)
        .then(res => console.log(res.data))
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
              <TextField
                  id="standard-secondary"                 
                  label="pasta img"
                  color="secondary"
                  name="pasta_img"
                  value={this.state.pasta_img} 
                  onChange={this.handleChange}
                  margin="normal" 
                  variant="filled"
                  fullWidth
                />
              <TextField
                  id="standard-secondary"                 
                  label="pasta name"
                  color="secondary"
                  name="pasta_name"
                  value={this.state.pasta_name} 
                  onChange={this.handleChange}
                  margin="normal" 
                  variant="filled"
                  fullWidth
                />
              <TextField
                  id="standard-secondary"                 
                  label="pasta description"
                  color="secondary"
                  name="pasta_description"
                  value={this.state.pasta_description} 
                  onChange={this.handleChange}
                  margin="normal" 
                  variant="filled"
                  fullWidth
                />
              <TextField
                  id="standard-secondary"                 
                  label="pasta price"
                  color="secondary"
                  name="pasta_price"
                  value={this.state.pasta_price} 
                  onChange={this.handleChange}
                  margin="normal" 
                  variant="filled"
                  fullWidth
                />
            <button className="btn btn-danger" type="submit" variant="contained">Update</button>
       </form>
        );
    };
};

export default CreatePasta;