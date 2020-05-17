import React, { Component, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Auth from "../../Auth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { setLoggedInUser } from "../../Redux/Actions";
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import fire from "../../config/FBConfig"
import { Hidden } from "@material-ui/core";
import { updateUserType } from "../Login/Login";

export  var userType ;

class SignUp extends Component {
  state = {
    email: "",
    pass: "",
    userName:"",
    phone:"",
    imgUrl:"",
    redirectToReferrer: false,
    image:{ preview: "", raw: "" },
    type:""
  };
  handleOptionChange = (changeEvent) => {
  userType = changeEvent.target.value
  console.log(userType);
}

App() {
  var [setImage] = useState({ preview: "", raw: "" });

  var handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };

  const handleUpload = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", this.state.image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: formData
    });
  };
}

 signUp = (e)=> {
          
          if(fire.auth().signInWithEmailAndPassword(this.state.email,this.state.pass )){
            fire.auth().createUserWithEmailAndPassword(
              this.state.email, 
              this.state.pass 
            
            ).then((u)=> {
              console.log(u.user.uid);
                        // Simulate authentication call
                        Auth.authenticate(this.state.email, this.state.pass, user => {
               
                          if (!user) {
                            this.setState({ wrongCred: true });
                            return;
                          }
                          
                          this.props.dispatch(setLoggedInUser({ name: user.name }));
                          this.setState(() => ({
                            redirectToReferrer: true
                          }));
                        });
                return fire.firestore().collection("users").doc(u.user.email).set({
                email:this.state.email,
                userName: this.state.userName,
                phone: this.state.phone,
                userType:userType
              });
            })
              updateUserType(userType);
          }
          this.setState({ wrongCred: true });
          return
  }
  

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    // If user was authenticated, redirect her to where he came from.
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
            SignUp
            {" "}
          </div>
          <TextField
            value={this.state.email}
            placeholder="email"
            type="email"
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
          <TextField
            value={this.state.userName}
            type="username"
            placeholder="UserName"
            onChange={e => {
              this.setState({ userName: e.target.value });
            }}
          />
          <TextField
            value={this.state.phone}
            type="text"
            placeholder="Phone"
            onChange={e => {
              this.setState({ phone: e.target.value });
            }}
          />

<form>
<div className="radio">
      <label>
        <input id="1"type="radio" value="student" 
                       onClick={() => {
                        document.getElementById('1').checked = true
                        document.getElementById('2').checked = false
                        // document.getElementById('uploadButton').style.visibility ;

                      }}
                      onChange={this.handleOptionChange}  />
       Student
      </label>/
    </div>

    <div className="radio">
      <label>
        <input id="2"type="radio" value="customer" 
                      
                        onClick={() => {
                          document.getElementById('2').checked = true
                          document.getElementById('1').checked = false
                          document.getElementById('uploadButton').style.visibility=Hidden ;
                        }}
                      onChange={this.handleOptionChange} />
       Customer
      </label>
    </div>
    
</form>
        <div id="uploadButton">
        <br />
        <br />
        <label htmlFor="upload-button">
          {this.state.image.preview ? (
            <img src={this.state.image.preview} alt="dummy" width="300" height="300" />
          ) : (
            <>
              <span className="fa-stack fa-2x mt-3 mb-2">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fas fa-store fa-stack-1x fa-inverse" />
              </span>
              <h5 className="text-center">Click to upload your photo</h5>
            </>
          )}
        </label>
        <input
          type="file"
          id="upload-button"
          style={{ display: "none" }}
          onChange={this.App.handleChange}
        />
        <br />
        <button onClick={this.App.handleUpload}>Upload</button>
      </div>

          <Button
            style={{ marginTop: 20, width: 200 }}
            variant="outlined"
            color="primary"
            onClick={() => {
               this.signUp();
    
            }}
          >
            Sign Up
          </Button>
          {this.state.wrongCred && (
            <div style={{ color: "red" }}>Wrong username and/or password</div>
          )}
        </div>
      </div>
    );
  }
}
const Login = withRouter(connect()(SignUp));

export default Login;
