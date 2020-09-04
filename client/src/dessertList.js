import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Card from './card';
import './pizzaList.css';
import Axios from 'axios';

const styles = theme => ({
    root: {
    marginTop: "3rem",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap"
        }
    }
  });


class DessertList extends Component{
  constructor(props){
    super(props);
    this.state = {dessert: [] }
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id){
    this.props.isAdmin && Axios.delete(`https://limitless-beyond-06124.herokuapp.com/desserts/${id}`)
    .then(res => console.log(res.data));
    this.setState({dessert: this.props.dessert.filter(dessert => dessert._id !== id)
    });
  };

    render(){
    const { classes } = this.props;
        return(
          <>
          <div class="mt-3">
            <img style={{width: "100%", height: "120px"}} alt="dessert-img" src="https://martjackamstorage.azureedge.net/am-resources/c79bc8ac-4c69-460f-829b-4d40568d0cca/Images/userimages/banners-may/Desserts_Banner.jpg" />	
          </div>
          {this.props.isAdmin && (<div>
            <a className="btn btn-danger mt-3" href='/desserts/new'>add dessert</a>
           </div>)}
            <div className={classes.root}>
            {this.props.dessert.map( (dessert, i)=> (
                <Card
                id={dessert._id}
                 img={dessert.dessert_img} 
                 name={dessert.dessert_name} 
                 description={dessert.dessert_description} 
                 price={dessert.dessert_price} 
                 selectItem={false}
                 showDialog={false}
                 index={i}
                 formType="desserts"
                 handleDelete={this.handleDelete}
                 isAdmin={this.props.isAdmin}
                 userId={this.props.userId}
                 key={dessert._id}
                 />
           ))}
           </div>
           </>
        );
    }
}

export default withStyles(styles)(DessertList);