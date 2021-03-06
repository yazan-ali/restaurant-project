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
    [theme.breakpoints.down("sm")]: {
      height: "120px"
    },
  }
});

class DealsList extends Component {
  render() {
    const { classes, deals, handleDelete } = this.props;
    return (
      <>
        <div class="mt-3">
          <img className={classes.headerImg} alt="deals-img" src="https://storage.eu.content-cdn.io/am-resources/c79bc8ac-4c69-460f-829b-4d40568d0cca/Images/userimages/banners-may/Deals_banner.jpg" />
        </div>
        {this.props.isAdmin && (<div>
          <a className="btn btn-danger mt-3" href='/deal/new'>add deal</a>
        </div>)}
        <div className={classes.root}>
          {deals.map((deal, i) => (
            <Card
              id={deal._id}
              img={deal.deal_img}
              name={deal.deal_name}
              description={deal.deal_description}
              price={deal.deal_price}
              selectItem={false}
              showDialog={false}
              index={i}
              formType="deals"
              handleDelete={handleDelete}
              isAdmin={this.props.isAdmin}
              userId={this.props.userId}
              key={deal._id}
            />
          ))}
        </div>
      </>
    );
  };
};

export default withStyles(styles)(DealsList);