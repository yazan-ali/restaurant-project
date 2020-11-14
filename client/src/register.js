import React, { Component } from 'react';
import Axios from 'axios';
import Avatar from "@material-ui/core/Avatar";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { Redirect } from 'react-router-dom';

const styles = theme => ({
  main: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up("sm")]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`
  },
  avatar: {
    marginTop: theme.spacing.unit,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
  },
});

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      user_name: "",
      password: "",
      showPassword: false,
      redirect: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
  }

  handleClickShowPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    Axios({
      method: "POST",
      data: {
        username: this.state.username,
        password: this.state.password,
        user_name: this.state.user_name,
        isAdmin: false
      },
      withCredentials: true,
      url: "https://limitless-beyond-06124.herokuapp.com/register",
    }).then((res) => console.log(res));

    setTimeout(() => this.setState({ redirect: true }), 1000)
  };
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        { this.state.redirect && <Redirect to="/login" />}
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5"> Sign Up </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit} >
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username" > Username </InputLabel>
              <Input onChange={this.handleChange} id="username" name="user_name" value={this.state.user_name} autoFocus ></Input>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email" > Email </InputLabel>
              <Input onChange={this.handleChange} id="email" name="username" value={this.state.username} ></Input>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password" > Password </InputLabel>
              <Input
                onChange={this.handleChange}
                type={this.state.showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={this.state.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                    >
                      {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              >
              </Input>
            </FormControl>
            <button className="btn btn-secondary mt-3" type="submit"> Sign Up </button>
          </form>
        </Paper>
      </main>
    );
  };
};

export default withStyles(styles)(Register);