import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: "#FCFCFC",
    flexDirection: "column",
    width: "98vw",
    margin: "2rem auto",
    border: "2px #CCCCCC solid",
    padding: theme.spacing(2),
    borderRadius: "1rem",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    }
  },
  header: {
    display: "flex"
  },
  name_qty: {
    display: "flex",
    justifyContent: "space-between"
  },
  img: {
    // width: "180px",
  },
  title: {
    color: "#c8102e",
    fontSize: "18px",
    [theme.breakpoints.up("md")]: {
      fontSize: "25px"
    }
  },
  description: {
    lineHeight: "25px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      lineHeight: "20px"
    }
  },
  price: {
    fontSize: "2rem",
    fontWeight: 500,
    marginLeft: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      marginLeft: "1rem"
    }
  },
  qty: {
    padding: "0 5px",
  },
  icon: {
    pointer: "cursor",
    marginTop: "0.3rem"
  },
  qty_icon: {
    display: "flex",
    justifyContent: "space-between"
  },
  name_description: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(3)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
})

class CartCard extends Component {
  constructor(props) {
    super(props);
    this.state = { qty: 1 }
    this.handleQtyChange = this.handleQtyChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleQtyChange(delta) {
    this.setState({ qty: this.state.qty + delta });
  }

  handleClose() {
    this.setState({ qty: 1 })
  }

  handleDelete() {
    this.props.handleDelete(this.props.id);
  }

  render() {
    const { classes, name, description, img, size, type, total, starters, drink } = this.props;
    const { qty } = this.state;
    return (
      <div>
        <div className={classes.root}>
          <div className={classes.header}>
            <div className={classes.img}> <img src={img} alt={name} /> </div>
            <div className={classes.name_description}>
              <div className={classes.name_qty}>
                <h3 className={classes.title}> {name} </h3>
                <div className={classes.qty_icon}>
                  <AddCircleIcon onClick={() => this.handleQtyChange(+1)} style={{ color: "#2AB840" }} className={classes.icon} />
                  <Typography variant="h5" className={classes.qty}> {this.state.qty} </Typography>
                  <RemoveCircleIcon onClick={() => this.handleQtyChange(-1)} color="secondary" className={classes.icon} />
                </div>
              </div>
              <Typography variant="h5" className={classes.description}> {description} </Typography>
            </div>
          </div>
          {this.props.mealType === "desserts" || this.props.mealType === "deals" ? "" : (
            <>
              {this.props.mealType === "pizza" ? (<div className={classes.size_type}>
                <FormControl className={classes.formControl}>
                  <TextField
                    id="size"
                    label="Size"
                    defaultValue={size}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <TextField
                    id="type"
                    label="Type"
                    defaultValue={type}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </FormControl>
              </div>) : ""}
              <Typography variant="h5" className={classes.drink}> {`Drink: ${drink}`} </Typography>
              {starters.length > 0 ? (
                <>
                  <Typography variant="h5">Starters:</Typography>
                  <ul>
                    {starters.map(starter => (
                      <li> {starter} </li>
                    ))}
                  </ul>
                </>
              ) : ""}
            </>
          )}
          <Typography variant="h5" className={classes.total}> {`Total: ${(total * qty)} JD`} </Typography>
        </div>
        <div>
          <Dialog
            open={qty === 0}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Conferm Order Delete"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to delete this order
                        </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
                        </Button>
              <Button onClick={this.handleDelete} color="primary">
                Delete
                        </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  };
};

export default withStyles(styles)(CartCard);