import React, { Component } from 'react';
import Axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class CreateDeal extends Component{
    constructor(props){
        super(props);
        this.state = {
            deal_img: "",
            deal_name: "",
            deal_description: "",
            deal_price: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e){
        e.preventDefault();
        const deal = {
            img: this.state.deal_img,
            name: this.state.deal_name,
            description: this.state.deal_description,
            price: this.state.deal_price
        }
        console.log(deal);
        this.props.isAdmin && Axios.post('http://localhost:5000/deals', deal)
        .then(res => console.log(res.data))
        this.setState({
            deal_img: "",
            deal_name: "",
            deal_description: "",
            deal_price: ""
        });
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
              <TextField
                  id="standard-secondary"                 
                  label="deal img"
                  color="secondary"
                  name="deal_img"
                  value={this.state.deal_img} 
                  onChange={this.handleChange}
                  margin="normal" 
                  variant="filled"
                  fullWidth
                />
              <TextField
                  id="standard-secondary"                 
                  label="deal name"
                  color="secondary"
                  name="deal_name"
                  value={this.state.deal_name} 
                  onChange={this.handleChange}
                  margin="normal" 
                  variant="filled"
                  fullWidth
                />
              <TextField
                  id="standard-secondary"                 
                  label="deal description"
                  color="secondary"
                  name="deal_description"
                  value={this.state.deal_description} 
                  onChange={this.handleChange}
                  margin="normal" 
                  variant="filled"
                  fullWidth
                />
              <TextField
                  id="standard-secondary"                 
                  label="deal price"
                  color="secondary"
                  name="deal_price"
                  value={this.state.deal_price} 
                  onChange={this.handleChange}
                  margin="normal" 
                  variant="filled"
                  fullWidth
                />
            <Button type="submit" variant="contained" color="secondary">Add Deal</Button>
       </form>
        );
    };
};

export default CreateDeal;