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
import Alert from '@material-ui/lab/Alert';

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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showPassword: false,
      showAlert: false,
      showAlert2: false,
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
      },
      withCredentials: true,
      url: "https://limitless-beyond-06124.herokuapp.com/login",
    }).then(res => {
      if (res.data === "No User Exists") {
        this.setState({ showAlert: true });
        this.setState({ showAlert2: false });
      } else {
        this.setState({ showAlert2: true });
        this.setState({ showAlert: false });
      }
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5"> Login </Typography>
          {this.state.showAlert && <Alert severity="error">Email address or password is incorrect</Alert>}
          {this.state.showAlert2 && <Alert severity="success">You have logged in successfully</Alert>}
          <form className={classes.form} onSubmit={this.handleSubmit} >
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email" > Email </InputLabel>
              <Input onChange={this.handleChange} id="email" name="username" value={this.state.username} autoFocus ></Input>
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
            <button className="btn btn-secondary mt-3" type="submit"> Login </button>
          </form>
        </Paper>
      </main>
    );
  };
};

export default withStyles(styles)(Login);