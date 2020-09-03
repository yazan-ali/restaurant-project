import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  root: {
    margin: "auto",
    width: "98vw",
   [theme.breakpoints.up("md")]: {
     width: "80vw"
    }
  }
});

class App extends Component{
  render(){
    return(
      <div className={this.props.classes.root}>
        {this.props.children}
      </div>
    );
  };
};

export default withStyles(styles)(App);
