import React, { Component } from 'react';
import Axios from 'axios';
import TextField from '@material-ui/core/TextField';


class EditPizza extends Component{
        constructor(props){
            super(props);
        this.state = {
            pizza_type: this.props.pizza.pizza_type,
            pizza_img: this.props.pizza.pizza_img,
            pizza_name: this.props.pizza.pizza_name,
            pizza_description: this.props.pizza.pizza_description,
            size_1: this.props.pizza.pizza_size.size_1,
            size_2: this.props.pizza.pizza_size.size_2,
            size_3: this.props.pizza.pizza_size.size_3,
            type_1: this.props.pizza.dough_type.type_1,
            type_2: this.props.pizza.dough_type.type_2,
            type_3: this.props.pizza.dough_type.type_3,
            type_4: this.props.pizza.dough_type.type_4,
            type_5: this.props.pizza.dough_type.type_5,
            type_1_medium_size: this.props.pizza.pizza_price.type_1.medium,
            type_1_large_size: this.props.pizza.pizza_price.type_1.large,
            type_1_small_size: this.props.pizza.pizza_price.type_1.small,
            type_2_medium_size: this.props.pizza.pizza_price.type_2.medium,
            type_2_large_size: this.props.pizza.pizza_price.type_2.large,
            type_2_small_size: this.props.pizza.pizza_price.type_2.small,
            type_3_medium_size: this.props.pizza.pizza_price.type_3.medium,
            type_3_large_size: this.props.pizza.pizza_price.type_3.large,
            type_3_small_size: this.props.pizza.pizza_price.type_3.small,
            type_4_medium_size: this.props.pizza.pizza_price.type_4.medium,
            type_4_large_size: this.props.pizza.pizza_price.type_4.large,
            type_4_small_size: this.props.pizza.pizza_price.type_4.small,
            type_5_medium_size: this.props.pizza.pizza_price.type_5.medium,
            type_5_large_size: this.props.pizza.pizza_price.type_5.large,
            type_5_small_size: this.props.pizza.pizza_price.type_5.small
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.props.pizza)
    }
    handleSubmit(e){
        e.preventDefault();
        const updatedPizza = {
            type: this.state.pizza_type,
            img: this.state.pizza_img,
            name: this.state.pizza_name,
            description: this.state.pizza_description,
            size_1: this.state.size_1,
            size_2: this.state.size_2,
            size_3: this.state.size_3,
            type_1: this.state.type_1,
            type_2: this.state.type_2,
            type_3: this.state.type_3,
            type_4: this.state.type_4,
            type_5: this.state.type_5,
            type_6: this.state.type_6,
            type_1_medium_size: this.state.type_1_medium_size,
            type_1_large_size: this.state.type_1_large_size,
            type_1_small_size: this.state.type_1_small_size,
            type_2_medium_size: this.state.type_2_medium_size,
            type_2_large_size: this.state.type_2_large_size,
            type_2_small_size: this.state.type_2_small_size,
            type_3_medium_size: this.state.type_3_medium_size,
            type_3_large_size: this.state.type_3_large_size,
            type_3_small_size: this.state.type_3_small_size,
            type_4_medium_size: this.state.type_4_medium_size,
            type_4_large_size: this.state.type_4_large_size,
            type_4_small_size: this.state.type_4_small_size,
            type_5_medium_size: this.state.type_5_medium_size,
            type_5_large_size: this.state.type_5_large_size,
            type_5_small_size: this.state.type_5_small_size,
        }
        this.props.isAdmin && Axios.put(`http://localhost:5000/pizza/${this.props.id}`, updatedPizza)
        .then(res => console.log(res.data));
        this.setState({redirect: "/pizza"});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <TextField
                id="standard-secondary"                 
                label="pizza type"
                color="secondary"
                name="pizza_type"
                value={this.state.pizza_type} 
                onChange={this.handleChange}
                margin="normal" 
                variant="filled"
                fullWidth
            />
            <TextField
                id="standard-secondary"                 
                label="pizza img"
                color="secondary"
                name="pizza_img"
                value={this.state.pizza_img} 
                onChange={this.handleChange}
                margin="normal" 
                variant="filled"
                fullWidth
              />
            <TextField
                id="standard-secondary"                 
                label="pizza name"
                color="secondary"
                name="pizza_name"
                value={this.state.pizza_name} 
                onChange={this.handleChange}
                margin="normal" 
                variant="filled"
                fullWidth
              />
            <TextField
                id="standard-secondary"                 
                label="pizza description"
                color="secondary"
                name="pizza_description"
                value={this.state.pizza_description} 
                onChange={this.handleChange}
                margin="normal" 
                variant="filled"
                fullWidth
              />
            <TextField
                id="standard-secondary"                 
                label="size 1"
                color="secondary"
                name="size_1"
                value={this.state.size_1} 
                onChange={this.handleChange}
                margin="normal" 
                variant="filled"
                fullWidth
            />
            <TextField
                id="standard-secondary"                 
                label="size 2"
                color="secondary"
                name="size_2"
                value={this.state.size_2} 
                onChange={this.handleChange}
                margin="normal" 
                variant="filled"
                fullWidth
            />            
            <TextField
            id="standard-secondary"                 
            label="size 3"
            color="secondary"
            name="size_3"
            value={this.state.size_3} 
            onChange={this.handleChange}
            margin="normal" 
            variant="filled"
            fullWidth
            />            
             <TextField
             id="standard-secondary"                 
             label="type 1"
             color="secondary"
             name="type_1"
             value={this.state.type_1} 
             onChange={this.handleChange}
             margin="normal" 
             variant="filled"
             fullWidth
            />
            <TextField
             id="standard-secondary"                 
             label="type 2"
             color="secondary"
             name="type_2"
             value={this.state.type_2} 
             onChange={this.handleChange}
             margin="normal" 
             variant="filled"
             fullWidth
            />
            <TextField
             id="standard-secondary"                 
             label="type 3"
             color="secondary"
             name="type_3"
             value={this.state.type_3} 
             onChange={this.handleChange}
             margin="normal" 
             variant="filled"
             fullWidth
            />
            <TextField
             id="standard-secondary"                 
             label="type 4"
             color="secondary"
             name="type_4"
             value={this.state.type_4} 
             onChange={this.handleChange}
             margin="normal" 
             variant="filled"
             fullWidth
            />
            <TextField
             id="standard-secondary"                 
             label="type 5"
             color="secondary"
             name="type_5"
             value={this.state.type_5} 
             onChange={this.handleChange}
             margin="normal" 
             variant="filled"
             fullWidth
            />
            <TextField
                id="standard-secondary"                 
                label="type 1 medium size price"
                color="secondary"
                name="type_1_medium_size"
                value={this.state.type_1_medium_size} 
                onChange={this.handleChange}
                margin="normal" 
                variant="filled"
                fullWidth
            />
            <TextField
                id="standard-secondary"                 
                label="type 1 large size price"
                color="secondary"
                name="type_1_large_size"
                value={this.state.type_1_large_size} 
                onChange={this.handleChange}
                margin="normal" 
                variant="filled"
                fullWidth
            />
            <TextField
                id="standard-secondary"                 
                label="type 1 small size price"
                color="secondary"
                name="type_1_small_size"
                value={this.state.type_1_smalll_size} 
                onChange={this.handleChange}
                margin="normal" 
                variant="filled"
                fullWidth
            />
            <TextField
                id="standard-secondary"                 
                label="type 2 medium size price"
                color="secondary"
                name="type_2_medium_size"
                value={this.state.type_2_medium_size} 
                onChange={this.handleChange}
                margin="normal" 
                variant="filled"
                fullWidth
            />
            <TextField
                id="standard-secondary"                 
                label="type 2 large size price"
                color="secondary"
                name="type_2_large_size"
                value={this.state.type_2_large_size} 
                onChange={this.handleChange}
                margin="normal" 
                variant="filled"
                fullWidth
            />
            <TextField
                id="standard-secondary"                 
                label="type 2 small size price"
                color="secondary"
                name="type_2_small_size"
                value={this.state.type_2_small_size} 
                onChange={this.handleChange}
                margin="normal" 
                variant="filled"
                fullWidth
            />
            <TextField
                id="standard-secondary"                 
                label="type 3 medium size price"
                color="secondary"
                name="type_3_medium_size"
                value={this.state.type_3_medium_size} 
                onChange={this.handleChange}
                margin="normal" 
                variant="filled"
                fullWidth
            />
            <TextField
                id="standard-secondary"                 
                label="type 3 large size price"
                color="secondary"
                name="type_3_large_size"
                value={this.state.type_3_large_size} 
                onChange={this.handleChange}
                margin="normal" 
                variant="filled"
                fullWidth
            />
            <TextField
                id="standard-secondary"                 
                label="type 3 small size price"
                color="secondary"
                name="type_3_small_size"
                value={this.state.type_3_small_size} 
                onChange={this.handleChange}
                margin="normal" 
                variant="filled"
                fullWidth
            />
            <TextField
                id="standard-secondary"                 
                label="type 4 medium size price"
                color="secondary"
                name="type_4_medium_size"
                value={this.state.type_4_medium_size} 
                onChange={this.handleChange}
                margin="normal" 
                variant="filled"
                fullWidth
            />
            <TextField
                id="standard-secondary"                 
                label="type 4 large size price"
                color="secondary"
                name="type_4_large_size"
                value={this.state.type_4_large_size} 
                onChange={this.handleChange}
                margin="normal" 
                variant="filled"
                fullWidth
            />
            <TextField
                id="standard-secondary"                 
                label="type 4 small size price"
                color="secondary"
                name="type_4_small_size"
                value={this.state.type_4_small_size} 
                onChange={this.handleChange}
                margin="normal" 
                variant="filled"
                fullWidth
            />
            <TextField
                id="standard-secondary"                 
                label="type 5 medium size price"
                color="secondary"
                name="type_5_medium_size"
                value={this.state.type_5_medium_size} 
                onChange={this.handleChange}
                margin="normal" 
                variant="filled"
                fullWidth
            />
            <TextField
                id="standard-secondary"                 
                label="type 5 large size price"
                color="secondary"
                name="type_5_large_size"
                value={this.state.type_5_large_size} 
                onChange={this.handleChange}
                margin="normal" 
                variant="filled"
                fullWidth
            />
            <TextField
                id="standard-secondary"                 
                label="type 5 small size price"
                color="secondary"
                name="type_5_small_size"
                value={this.state.type_5_small_size} 
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

export default EditPizza;