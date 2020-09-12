import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
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
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Checkbox from '@material-ui/core/Checkbox';
import Axios from 'axios';


const styles = theme => ({
  root: {
    width: "98vw",
    backgroundColor: "#FCFCFC",
    display: "flex",
    justifyContent: "space-between",
    border: "1.5px solid #CCCCCC ",
    borderRadius: "5px",
    padding: "1rem",
    marginBottom: "1rem",
    fontSize: "1.3rem",
    [theme.breakpoints.up("md")]: {
      width: "49%",
  }
},
  content: {
    marginLeft: "1rem",
},
title: {
  color: "#c8102e",
  fontSize: "18px",
  [theme.breakpoints.up("md")]: {
   fontSize: "25px"
}
},
price: {
  fontSize: "2rem",
  fontWeight: 500,
  marginLeft: "1.8rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
 }
},
formControl: {
  margin: theme.spacing(1),
  minWidth: 120,
},
description: {
  lineHeight: "25px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
    lineHeight: "20px"
 }
},
img: {
  width: "180px"
},
edit_delete_btn: {
  display: "flex",
  height: "3rem",
},
addToCartBtn: {
  marginTop: "1.5rem",
  backgroundColor: "#c8102e",
  color: "white",
  "& hover":{
    backgroundColor: "#c8102e",
    color: "white",
  }
},
deleteIcon:{
  color:"#D83616"
}
});

class Card extends Component{
  constructor(props){
      super(props);
      this.state={size: "Medium",
      type: "Pan",
      addToCart: false, 
      loginDialog: false,
      drink: "Choose one", 
      AddOns: [], 
      total: 0, 
      totalPrice: 0, 
      cartItems: [],
    }
      this.handleChange = this.handleChange.bind(this);
      this.handleClickOpen = this.handleClickOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleCheck = this.handleCheck.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleStarterDelete = this.handleStarterDelete.bind(this);
      this.handleRadioChange = this.handleRadioChange.bind(this);
      this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount(){
    Axios.get('https://limitless-beyond-06124.herokuapp.com/starters')
    .then(res => {
      if(res.data.length > 0){
        this.setState({AddOns: res.data})
      }
    });
    console.log(this.state.AddOns);
  }

  getPrice(){
    if(this.props.selectItem){
        if(this.state.size === "Medium" && this.state.type === "Pan"){
          return this.props.price.type_1.medium
        } else if(this.state.size === "Medium" && this.state.type === "San Fransisco"){
          return this.props.price.type_2.medium
        } else if(this.state.size === "Medium" && this.state.type === "Thin N Crispy"){
          return this.props.price.type_3.medium
        } else if(this.state.size === "Medium" && this.state.type === "Stuffed Crust"){
          return this.props.price.type_4.medium
        } else if(this.state.size === "Medium" && this.state.type === "Cheesy Bites"){
          return this.props.price.type_5.medium
        } else if(this.state.size === "Large" && this.state.type === "Pan"){
          return this.props.price.type_1.large
        } else if(this.state.size === "Large" && this.state.type === "San Fransisco"){
          return this.props.price.type_2.large
        } else if(this.state.size === "Large" && this.state.type === "Thin N Crispy"){
          return this.props.price.type_3.large
        } else if(this.state.size === "Large" && this.state.type === "Stuffed Crust"){
          return this.props.price.type_4.large
        } else if(this.state.size === "Large" && this.state.type === "Cheesy Bites"){
          return this.props.price.type_5.large
        } else if(this.state.size === "Small" && this.state.type === "Pan"){
          return this.props.price.type_1.small
        } else if(this.state.size === "Small" && this.state.type === "San Fransisco"){
          return this.props.price.type_2.small
        } else if(this.state.size === "Small" && this.state.type === "Thin N Crispy"){
          return this.props.price.type_3.small
        } else if(this.state.size === "Small" && this.state.type === "Stuffed Crust"){
          return this.props.price.type_4.small
        } else if(this.state.size === "Small" && this.state.type === "Cheesy Bites"){
          return this.props.price.type_5.small
        }
      }
    }

  handleChange(evt){
    this.setState({[evt.target.name] : evt.target.value});
  }
  handleClose(){
    this.setState({addToCart: false, loginDialog:false});
  }
  handleClickOpen(){
    if(this.props.userId){
      this.setState({addToCart: true, loginDialog: false});
    } else{
      this.setState({addToCart: false, loginDialog: true});
    }
    this.getTotal();
  }
   handleCheck(id){
    const updatedAddOns = this.state.AddOns.map(addOn => addOn._id === id ? {...addOn, checked: !addOn.checked} : addOn );
    this.setState({ AddOns:updatedAddOns});
    console.log(this.state.AddOns);
  }
  handleRadioChange(evt){
    this.setState({ [evt.target.name] : evt.target.value });
  }
  getTotal(){
    let total = Number(this.getPrice() || this.props.price);
    this.setState({ total: total });
  }
  
  handleAddToCart(){
    const addOnaddToCart=this.state.AddOns.filter(addOn => addOn.checked);
    const user_id = this.props.userId
         Axios.post('https://limitless-beyond-06124.herokuapp.com/cart', { name: this.props.name,
         img: this.props.img,
         description:this.props.description,
         size: this.state.size,
         type: this.state.type,
         drink: this.state.drink,
         addOne: addOnaddToCart.map(item => item.starter_name),
         total: this.state.total + this.totalPrice(),
         mealType: this.props.formType, user_id})
         .then(res => console.log(res.data))
         this.setState({addToCart: false})
       }

  handleDelete(){
    this.props.handleDelete(this.props.id, this.props.formType);
  }

  handleStarterDelete(id){
    Axios.delete(`https://limitless-beyond-06124.herokuapp.com/starters/${id}`)
    .then(res => console.log(res.data));
    this.setState({AddOns: this.state.AddOns.filter(starter => starter._id !== id)
    });
  };
  
  totalPrice(){
    const addOnsPrice = this.state.AddOns.map( addOn => addOn.checked ? Number(addOn.starter_price) : 0 );
    function ReduceTotal(total, num){
      return total + num
    }
    return addOnsPrice.reduce(ReduceTotal, 0);
  }
  
  render() {
    const { classes, img, name, description, price, sizes, types, selectItem, index, id, formType, showDialog } = this.props;
    const { size, type, addToCart, drink, AddOns, total} = this.state;
    return (
      <div className={classes.root}>
        <div>
          <img className={classes.img} src={img} alt={name} />
          <span className={classes.price}> {`${(selectItem && this.getPrice()) || price} JD`} </span>
        </div>
        <div className={classes.content}>
          <div style={{display:"flex"}}>
         <h3 className={classes.title}> {name} </h3>
         {this.props.isAdmin && ( <div className={classes.edit_delete_btn}>
        <a href={`/${formType}/edit${index}/${id}`}><EditIcon /> </a>
        <span className={classes.deleteIcon}  onClick={this.handleDelete}> <DeleteIcon/> </span>
        </div>)}
      </div>
          <Typography variant="h6" className={classes.description}> {description} </Typography>
          {selectItem && (
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
       )}
       <div>
      <button className={`${classes.addToCartBtn} btn btn-danger`}  onClick={this.handleClickOpen}>
        Add To Cart
      </button>
      <Dialog
        open={this.state.loginDialog}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You should be logged in to add this item to cart
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary"><a style={{color:"#3f51b5", textDecoration:"none"}} href="/login">Login</a></Button>
        </DialogActions>
      </Dialog>


      <Dialog open={addToCart} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add to shoping cart</DialogTitle>
        {showDialog && (
         <>
        <DialogContent>
          <DialogContentText>
            <div className={classes.addToCart}>
           <div className={classes.addToCartContent}>
             <Typography variant="h5"> {name} </Typography>
             <Typography variant="h6"> {description} </Typography>
             <Typography> Size: {size} </Typography>
             <Typography> Dough type: {type} </Typography>
             <Typography> Drink: {drink.toUpperCase()}</Typography>
             <span>Starters: </span>
             <ul style={{listStyle: "none"}} > 
               {this.state.AddOns.map( addOn =>
                <li key={addOn._id}> {addOn.checked && addOn.starter_name} </li>
                )}
             </ul>
             <Typography variant="h5"> {`Total: ${(total + this.totalPrice()).toPrecision(4) } JD`} </Typography>
           </div>
           <div className={classes.addToCartExtra}>
             <FormControl component="fieldset">
             <FormLabel component="legend">Choose Your Drink</FormLabel>
             <RadioGroup row aria-label="drink" name="drink" value={drink} onChange={this.handleRadioChange}>
             <FormControlLabel value="pepsi" control={<Radio required />} label="PEPSI" />
             <FormControlLabel value="diet Pepsi" control={<Radio />} label="DIET PEPSI" />
             <FormControlLabel value="mirinda" control={<Radio />} label="MIRINDA" />
             <FormControlLabel value="7up" control={<Radio />} label="7UP" />
            </RadioGroup>
           </FormControl>
           <FormGroup row>
            {this.props.isAdmin && <a className="btn btn-danger" href="/starters/new">Add starter</a> }
            {AddOns.map( (addOn, i) => (
              <FormControlLabel
              control={
                <>
                {this.props.isAdmin && 
                <>
                <span className={classes.deleteIcon} onClick={() => this.handleStarterDelete(addOn._id)}> < DeleteIcon/> </span>
                <a href ={`/starters/edit${i}/:id`}><EditIcon/></a>
                </>
              }
                <Checkbox
                  key= {addOn._id}
                  checked={addOn.checked}
                  onChange={ () => this.handleCheck(addOn._id)}
                  name={addOn.starter_name}
                  // color="primary"
                />
                </>
              }
              label={`${addOn.starter_name} ${addOn.starter_price} JD`}
            />
            ))} 
    </FormGroup>
           </div>
           </div>
          </DialogContentText>
        </DialogContent>
        </>
      )}
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleAddToCart} color="primary">
            Add to cart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
      <div>
      </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Card);
