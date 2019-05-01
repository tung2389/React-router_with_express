import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { LOG_OUT_URL, DASHBOARD_URL } from '../config/Url';
import '../App.css';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined
    };
    this.logout = this.logout.bind(this);
    this.main_component = this.main_component.bind(this);
  }

  logout() {
    fetch(LOG_OUT_URL, {
      method: "GET",
      credentials:'include'
    }).then(res => res.text().then(res => alert(res)));
    this.setState({ data: false });
  }

  async componentDidMount() {
    let res = await fetch(DASHBOARD_URL,{
      method: "GET",
      credentials:'include'
    });

    if(res.status === 200){
        let result = await res.json();
        this.setState({data: result});
    }

    else{
        let result = await res.text();
        this.setState({data: false});
        alert(result);
    }
    
  }

  render_data(data) {
    return (
        <Paper elevation={1} className="center_content">
          <h1 align="center">Your email: {data.email}</h1>
          <h1 align="center">Your username: {data.username}</h1>
          <div className = "center">
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            onClick={this.logout}
          >
            Log out
          </Button>
          </div>
        </Paper>
    );
  }
  
  main_component(){
    if(this.state.data !== undefined) {
      if(this.state.data) {
        return (
          <div>
          {this.render_data(this.state.data)}
          </div>
        )
      }
      else {
        return(
        <div className = "center">
          You haven't logged in yet
        </div>
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
    );
  }
}
