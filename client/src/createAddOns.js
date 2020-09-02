import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';


class CreateStarters extends Component{
    constructor(props){
        super(props);
        this.state = {
          starter_name: "",
          starter_price: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e){
        e.preventDefault();
        const starter = {
            starter_name: this.state.starter_name,
            starter_price: this.state.starter_price,
        }
        axios.post('http://localhost:5000/starters', starter)
        .then(res => console.log(res.data))
        this.setState({
            starter_name: "",
            starter_price: "",

        })
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
              <TextField
                  style={{display: "none"}}
                  id="standard-secondary"                 
                  color="secondary"
                  name="check"
                  value={false} 
                  margin="normal" 
                  variant="filled"
                  fullWidth
                />
          <button className="btn btn-danger" type="submit" variant="contained" color="secondary">Add Starter</button>
       </form>
        );
    };
};

export default CreateStarters;