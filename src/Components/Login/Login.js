import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Auth from "../../Auth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { setLoggedInUser } from "../../Redux/Actions";
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import fire from "../../config/FBConfig"

class ConnectedLogin extends Component {
  state = {
    email: "",
    pass: "",
    redirectToReferrer: false
  };
  login(e) {
    // e.preventDefault(); 
   fire.auth().signInWithEmailAndPassword(this.state.email, this.state.pass).then((user)=>{
    // Auth.authenticate(this.state.email, this.state.pass, user => {

      if (!user) {
        this.setState({ wrongCred: true });
        return;
      }

      this.props.dispatch(setLoggedInUser({ name: user.name }));
      
    // });
    this.setState(() => ({
      redirectToReferrer: true
    }));
     
    }).catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    // If user was authenticated, redirect her to where she came from.
    if (this.state.redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <div style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",

        alignItems: "center",
      }}>
        <div
          style={{
            height: 300,
            width: 200,
            padding: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <Avatar style={{ marginBottom: 10 }}>
            <LockOutlinedIcon />
          </Avatar>
          <div
            style={{
              marginBottom: 20,
              fontSize: 24,
              textAlign: "center"
            }}
          >
            {" "}
            Login
            {" "}
          </div>
          <TextField
            value={this.state.email}
            placeholder="email"
            onChange={e => {
              this.setState({ email: e.target.value });
            }}
          />
          <TextField
            value={this.state.pass}
            type="password"
            placeholder="Password"
            onChange={e => {
              this.setState({ pass: e.target.value });
            }}
          />
          <Button
            style={{ marginTop: 20, width: 200 }}
            variant="outlined"
            color="primary"
            onClick={() => {

              this.login();
              // Simulate authentication call
              
            }}
          >
            Login
          </Button>
          {this.state.wrongCred && (
            <div style={{ color: "red" }}>Wrong username and/or password</div>
          )}
        </div>
      </div>
    );
  }
}
const Login = withRouter(connect()(ConnectedLogin));

export default Login;