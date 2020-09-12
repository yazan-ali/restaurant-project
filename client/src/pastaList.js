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


class PastaList extends Component{

    render(){
    const { classes, pasta, handleDelete } = this.props;
        return(
          <>
          <div class="mt-3">
            <img className={classes.headerImg} style={{width: "100%" }} alt="pasta-img" src="https://martjackamstorage.azureedge.net/am-resources/c79bc8ac-4c69-460f-829b-4d40568d0cca/Images/userimages/banners-may/Pasta_Banner.jpg" />	
          </div>
          {this.props.isAdmin && (<div>
            <a className="btn btn-danger mt-3" href='/pasta/new'>add pasta</a>
           </div>)}
            <div className={classes.root}>
            {pasta.map( (pasta, i)=> (
                <Card
                id={pasta._id}
                 img={pasta.pasta_img} 
                 name={pasta.pasta_name} 
                 description={pasta.pasta_description} 
                 price={pasta.pasta_price} 
                 selectItem={false}
                 showDialog={true}
                 index={i}
                 formType="pasta"
                 handleDelete={handleDelete}
                 isAdmin={this.props.isAdmin}
                 userId={this.props.userId}
                 key={pasta._id}
                 />
           ))}
           </div>
           </>
        );
    }
}

export default withStyles(styles)(PastaList);