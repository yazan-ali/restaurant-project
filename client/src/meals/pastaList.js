import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Card from '../meals/card';
import '../meals/pizzaList.css';
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


class PastaList extends Component{
  constructor(props){
    super(props);
    this.state = {pasta: [] }
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    Axios.get('http://localhost:5000/pasta')
    .then(res => {
      if(res.data.length > 0){
        this.setState({pasta: res.data})
      }
    });
    console.log(this.state.pasta);
  };

  handleDelete(id){
    this.props.isAdmin && Axios.delete(`http://localhost:5000/pasta/${id}`)
    .then(res => console.log(res.data));
    this.setState({pasta: this.state.pasta.filter(pasta => pasta._id !== id)
    });
  };

    render(){
    const { classes } = this.props;
        return(
          <>
          <div class="d-none d-md-block mt-3">
            <img class="pizza-nav-img" alt="pasta-img" src="https://martjackamstorage.azureedge.net/am-resources/c79bc8ac-4c69-460f-829b-4d40568d0cca/Images/userimages/banners-may/Pasta_Banner.jpg" />	
          </div>
          {this.props.isAdmin && (<div>
            <a className="btn btn-danger mt-3" href='/pasta/new'>add pasta</a>
           </div>)}
            <div className={classes.root}>
            {this.state.pasta.map( (pasta, i)=> (
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
                 handleDelete={this.handleDelete}
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