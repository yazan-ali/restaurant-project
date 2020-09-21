import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";

const style = theme => ({
    carouselCap: {
      color: "#c8102e",
      textShadow: "1.5px 1.5px rgba(0,0,0,0.5)",
      width: "50%",
      marginLeft: "7rem",
      background: "white",
      borderRadius: "15px",
      opacity: "0.7",
      [theme.breakpoints.down("md")]: {
        marginLeft: "3.5rem",
      }
    },
    carousel: {
      marginTop: "1rem"
    },
    cardImg: {
      width: "100px",
      margin: "auto"
    },
    card: {
      height: "400px",
      textAlign: "center"
    },
    cardText: {
      lineHeight: "20px"
    }
});

class LandingPage extends Component{
    render(){
        const { classes } = this.props; 
        return(
            <div className={classes.root}>
              <div className={classes.carousel}>
              <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                  </ol>
                  <div style={{borderRadius:"10px"}} className="carousel-inner">
                    <div className="carousel-item active">
                    <a href="/pizza-house">
                      <div>
                      <img style={{height: "500px"}} src="https://luigispizza.jo/wp-content/uploads/2015/09/home-pizza-greca.jpg" className="d-block w-100" alt="carousel-img-1"/>
                      <div className={`carousel-caption ${classes.carouselCap}`}>
                        <h2 className="d-none d-md-block">Fresh, Delicious And Honest Food Served With Care all found in Pizza House</h2>
                        <h4 className="d-md-none d-block">Fresh, Delicious And Honest Food Served With Care all found in Pizza House</h4>
                      </div>
                    </div>
                    </a>
                    </div>
                    <div className="carousel-item">
                      <a href="/pizza-house/pizza">
                      <div>
                      <img style={{height: "500px"}} src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" className="d-block w-100" alt="carousel-img-2"/>
                      <div className={`carousel-caption ${classes.carouselCap}`}>
                        <h2 className="d-none d-md-block">FRESHLY BAKED HANDCRAFTED GOURMET PIZZAS AND  MORE...</h2>
                        <h4 className="d-md-none d-block">FRESHLY BAKED HANDCRAFTED GOURMET PIZZAS AND  MORE...</h4>
                      </div>
                      </div>
                      </a>
                    </div>
                    <div className="carousel-item">
                    <a href="/pizza-house/pasta">
                      <div>
                      <img style={{height: "500px"}} src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&auto=format&fit=crop&w=2003&q=80" className="d-block w-100" alt="carousel-img-3"/>
                      <div className={`carousel-caption ${classes.carouselCap}`}>
                      <h2 className="d-none d-md-block">Pizza house has one of the best pasta in the world</h2>
                      <h4 className="d-md-none d-block">Pizza house has one of the best pasta in the world</h4>
                      </div>
                    </div>
                    </a>
                    </div>
                    <div className="carousel-item">
                    <a href="/pizza-house/desserts">
                      <div>
                      <img style={{height: "500px"}} src="https://images.unsplash.com/photo-1506095619733-3c3ea98fb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" className="d-block w-100" alt="carousel-img-4"/>
                      <div className={`carousel-caption ${classes.carouselCap}`}>
                        <h2 className="d-none d-md-block">Taste the best desserts from Pizza House</h2>
                        <h4 className="d-md-none d-block">Taste the best desserts from Pizza House</h4>
                      </div>
                    </div>
                    </a>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="row mt-3 pb-5">
                 <div className="col-md-4">
                 <div className={`card ${classes.card}`} >
                   <img src="https://luigispizza.jo/wp-content/uploads/2015/09/about-us-icon-e1442790830539.png" className={`card-img-top ${classes.cardImg}`} alt="..." />
                   <div className="card-body">
                   <h5 className="card-title">About Us</h5>
                   <p className={`card-text ${classes.cardText}`}>he secret to our food? It’s pretty simple. Source fresh, quality ingredients. Prepare dishes with care and passion. Serve them with a warm smile. In other words, we take pride in what we make and how we share it. Even though we’ve grown a lot over the years, our mission is still the same:  Always the best food, made especially for you.</p>
                   </div>
                </div>
                 </div>
                 <div className="col-md-4">
                 <div className={`card ${classes.card}`} >
                   <img src="https://luigispizza.jo/wp-content/uploads/2015/09/pizza-icon-e1442790895743.png" className={`card-img-top ${classes.cardImg}`} alt="..." />
                   <div className="card-body">
                   <h5 className="card-title">Our Pizza</h5>
                   <p className={`card-text ${classes.cardText}`}>Our pizzas are wood oven baked using only the freshest ingredients, homemade pasta sauce and fresh dough made daily.</p>
                   </div>
                </div>
                 </div>
                 <div className="col-md-4">
                 <div className={`card ${classes.card}`} >
                   <img src="https://luigispizza.jo/wp-content/uploads/2015/09/delivery-icon-e1442790877661.png" className={`card-img-top ${classes.cardImg}`} alt="..." />
                   <div className="card-body">
                   <h5 className="card-title">Catering and Delivery</h5>
                   <p className={`card-text ${classes.cardText}`}>With our portable wood oven, we can cater any event, whether it be a private party or social gathering. And with our two cars, we offer an efficient delivery service.</p>
                   </div>
                </div>
                 </div>
              </div>
            </div>
        );
    };
};

export default withStyles(style)(LandingPage);