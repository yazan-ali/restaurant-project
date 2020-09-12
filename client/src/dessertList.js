import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Card from './card';
import './pizzaList.css';

const styles = theme => ({
    root: {
    marginTop: "1.5rem",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap"
        }
    },
    headerImg: {
      width: "100%",
      [theme.breakpoints.down("sm")]:{
        height: "120px"
      },
    }
  });


class DessertList extends Component{

    render(){
    const { classes, dessert, handleDelete } = this.props;
        return(
          <>
          <div class="mt-3">
            <img className={classes.headerImg} alt="dessert-img" src="https://martjackamstorage.azureedge.net/am-resources/c79bc8ac-4c69-460f-829b-4d40568d0cca/Images/userimages/banners-may/Desserts_Banner.jpg" />	
          </div>
          {this.props.isAdmin && (<div>
            <a className="btn btn-danger mt-3" href='/desserts/new'>add dessert</a>
           </div>)}
            <div className={classes.root}>
            {dessert.map( (dessert, i)=> (
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
                 handleDelete={handleDelete}
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