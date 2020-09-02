import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  root: {
    width: "95vw",
    display: "flex",
    justifyContent: "space-between",
    border: "1.5px solid #CCCCCC ",
    borderRadius: "5px",
    padding: "1rem",
    fontSize: "1.3rem",
    [theme.breakpoints.up("md")]: {
      width: "49%",
  }
},
  content: {
    marginLeft: "2rem",
},
title: {
  color: "#c8102e"
},
price: {
  fontSize: "2rem",
  fontWeight: 500,
  marginLeft: "2rem",
},
formControl: {
  margin: theme.spacing(1),
  minWidth: 120,
},
discription: {
  lineHeight: "20px"
}
});

class PizzaCard extends Component{
  constructor(props){
      super(props);
      this.state={size: "medium",type: "Pan"}
      this.handleChange = this.handleChange.bind(this);
  }
  getPrice(){
    if(this.state.size === "medium" && this.state.type === "Pan"){
      return this.props.price.midPan
    } else if(this.state.size === "medium" && this.state.type === "San Fransisco"){
      return this.props.price.midSan
    } else if(this.state.size === "medium" && this.state.type === "Thin N Crispy"){
      return this.props.price.midThin
    } else if(this.state.size === "medium" && this.state.type === "Stuffed Crust"){
      return this.props.price.midStuffed
    } else if(this.state.size === "medium" && this.state.type === "Cheesy Bites"){
      return this.props.price.midCheesy
    } else if(this.state.size === "larg" && this.state.type === "Pan"){
      return this.props.price.largPan
    } else if(this.state.size === "larg" && this.state.type === "San Fransisco"){
      return this.props.price.largSan
    } else if(this.state.size === "larg" && this.state.type === "Thin N Crispy"){
      return this.props.price.largThin
    } else if(this.state.size === "larg" && this.state.type === "Stuffed Crust"){
      return this.props.price.largStuffed
    } else if(this.state.size === "larg" && this.state.type === "Cheesy Bites"){
      return this.props.price.largCheesy
    } else if(this.state.size === "small" && this.state.type === "Pan"){
      return this.props.price.smallPan
    } else if(this.state.size === "small" && this.state.type === "San Fransisco"){
      return this.props.price.smallSan
    } else if(this.state.size === "small" && this.state.type === "Thin N Crispy"){
      return this.props.price.smallThin
    } else if(this.state.size === "small" && this.state.type === "Stuffed Crust"){
      return this.props.price.smallStuffed
    } else if(this.state.size === "small" && this.state.type === "Cheesy Bites"){
      return this.props.price.smallCheesy
    }
  }
  handleChange(evt){
    this.setState({[evt.target.name] : evt.target.value});
  }
  render() {
    const { classes, img, name, discription, price, sizes, types } = this.props;
    const { size, type } = this.state;
    return (
      <div className={classes.root}>
        <div className="img">
          <img src={img} />
          <span className={classes.price}> {`${this.getPrice()} JD`} </span>
        </div>
        <div className={classes.content}>
          <h3 className={classes.title}> {name} </h3>
          <Typography variant="h6" className={classes.discription}> {discription} </Typography>
          <div className={classes.select}>
          <FormControl className={classes.formControl}>
        <InputLabel id="size">Select Size</InputLabel>
        <Select id="size" name="size" value={size} onChange={this.handleChange}>
          {sizes.map(size => (
            <MenuItem key={size} value={size}> {size} </MenuItem>
          ))}
        </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
        <InputLabel id="type">Select Type</InputLabel>
        <Select id="type" name="type" value={type} onChange={this.handleChange}>
          {types.map(type => (
            <MenuItem key={type} value={type}> {type} </MenuItem>
          ))}
        </Select>
        </FormControl>
      </div>
      <div>
      </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PizzaCard);
