import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import submit from '../controller/Submit';
import { REGISTER_URL } from '../config/Url';
import '../App.css';

export default class Register extends Component {
    constructor(props)
    {
      super(props);
      this.state = {
        email:undefined,
        password:undefined,
        confirm_password:undefined,
        username:undefined
      }
      this.notSubmit = this.notSubmit.bind(this);
      this.change_form = this.change_form.bind(this);
      this.sign_up = this.sign_up.bind(this);
    }
    sign_up()
    {
      if(this.state.email && this.state.username && this.state.password && this.state.confirm_password)
      {
      if(this.state.password === this.state.confirm_password)
      {
      let data = JSON.stringify({
        email:this.state.email,
        username:this.state.username,
        password:this.state.password
      });
      submit(REGISTER_URL,data);
      }
      else
      {
        alert("Two passwords are not the same");
      }
      }
    }
    notSubmit(e)
    {
      e.preventDefault();
    }
    change_form(e,param)
    {
      this.setState({[param]:e.target.value})
    }
    render()
    {
      return(
        <div className = "float-up">
          <Paper elevation = {1} className = "center_content">
          <form className = "center" onSubmit =  {this.notSubmit}>
          <Typography component="h1" variant="h5">
              Sign up
          </Typography>
          <TextField margin = "normal" className = "test" label = "Email" onChange = {(e) => {this.change_form(e,"email")}} required />
          <br/>
          <TextField margin = "normal" className = "test" label = "Username" onChange = {(e) => {this.change_form(e,"username")}} required />
          <br/>
          <TextField margin = "normal" className = "test" label = "Password" onChange = {(e) => {this.change_form(e,"password")}} required />
          <br/>
          <TextField margin = "normal" className = "test" label = "Confirm password" onChange = {(e) => {this.change_form(e,"confirm_password")}} required />
          <br/>
          <Button type = "submit" color = "primary" variant = "contained" className = "login_btn" onClick = {this.sign_up}>Sign up</Button>
          </form>
          </Paper>
          </div>
        );
    }
}
