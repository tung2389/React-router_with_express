import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import submit from '../controller/Submit';
import { DASHBOARD_URL, LOG_IN_URL } from '../config/Url';
import Dashboard from './Dashboard';
import '../App.css';

export default class Login extends Component {
    constructor(props)
    {
      super(props);
      this.state = {
        email:undefined,
        password:undefined,
        is_log_in:undefined,
        data:undefined
      };
      this.notSubmit = this.notSubmit.bind(this);
      this.change_form = this.change_form.bind(this);
      this.login = this.login.bind(this);
      this.check_login = this.check_login.bind(this);
      this.main_component = this.main_component.bind(this);
    }
    async check_login()
    {
      let res = await fetch(DASHBOARD_URL,{
        method: 'GET',
        credentials:'include'
      });

      if(res.status === 200){
        let result = await res.json();
        this.setState({is_log_in:true,data:result});
      }

      else{
        this.setState({is_log_in:false});
      }

    }
    componentDidMount(){
      this.check_login();
    }
    async login()
    {
      if(this.state.email && this.state.password)
      {
      let data = JSON.stringify({
        email:this.state.email,
        password:this.state.password
      });
      await submit(LOG_IN_URL,data);
      this.check_login();
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
    main_component(){
      if(this.state.is_log_in !== undefined) {
        if(this.state.is_log_in) {
          return <Dashboard />
        }
        else {
          return (
            <Paper elevation = {1} className = "center_content">
            <form className = "center" onSubmit =  {this.notSubmit} >
            <Typography component="h1" variant="h5">
                Log in
            </Typography>
            <TextField margin = "normal" className = "test" label = "Email" onChange ={(e) => this.change_form(e,"email")} required />
            <br/>
            <TextField margin = "normal" className = "test" label = "Password" onChange = {(e) => this.change_form(e,"password")} required />
            <br/>
            <Button type = "submit" color = "primary" variant = "contained" className = "login_btn" onClick = {this.login}>Log in</Button>
            </form>
            </Paper>
          );
        }
      }
      else {
        return <div></div>
      }
    }
  render() {
    return (
      <div className = "float-up">
        {this.main_component()}
      </div>
    )
  }
}
