import React, { Component } from 'react';
import { addOnsOption } from '../meal';
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import { addOnsOption } from '../meal';
import { Link } from 'react-router-dom';
import AddOns from '../meals/addOns';

class AddOns extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const  {classes, name, description, size, drink, type} = this.props;
        return(
            <div className={classes.addToCart}>
           <div className={classes.addToCartContent}>
             <Typography variant="h5"> {name} </Typography>
             <Typography variant="h6"> {description} </Typography>
             <Typography> Size: {size} </Typography>
             <Typography> Dough type: {type} </Typography>
             <Typography> Drink: {drink.toLocaleUpperCase()}</Typography>
             <span>Add-ons: </span>
             <ul style={{listStyle: "none"}} > 
               {this.state.AddOns.map( addOn =>
                <li> {addOn.checked && addOn.name} </li>
                )}
             </ul>
             <Typography variant="h5"> {`Total: ${(total + this.totalPrice()).toPrecision(4) } JD`} </Typography>
           </div>
           <div className={classes.addToCartExtra}>
             <FormControl component="fieldset">
             <FormLabel component="legend">Choose Your Drink</FormLabel>
             <RadioGroup row aria-label="drink" name="drink" value={drink} onChange={this.handleRadioChange}>
             <FormControlLabel value="pepsi" control={<Radio />} label="PEPSI" />
             <FormControlLabel value="diet Pepsi" control={<Radio />} label="DIET PEPSI" />
             <FormControlLabel value="mirinda" control={<Radio />} label="MIRINDA" />
             <FormControlLabel value="7up" control={<Radio />} label="7UP" />
            </RadioGroup>
           </FormControl>
           <FormGroup row>
            {AddOns.map( addOn => (
              <FormControlLabel
              control={
                <Checkbox
                  checked={addOn.checked}
                  onChange={ () => this.handleCheck(addOn.id)}
                  name={addOn.name}
                  // color="primary"
                />
              }
              label={`${addOn.name} ${addOn.price} JD`}
            />
            ))} 
    </FormGroup>
           </div>
           </div>
        );
    };
};

export default AddOns;