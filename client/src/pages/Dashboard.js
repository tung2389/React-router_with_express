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
  }

  logout() {
    fetch(LOG_OUT_URL, {
      method: "GET"
    }).then(res => res.text().then(res => alert(res)));
    this.setState({ data: undefined });
  }

  async componentDidMount() {
    let res = await fetch(DASHBOARD_URL);

    if(res.status === 200){
        let result = await res.json();
        this.setState({data: result});
    }

    else{
        let result = await res.text();
        alert(result);
    }
    
  }

  render_data(data) {
    return (
      <div className="float-up">
        <Paper elevation={1} className="center_content">
          <h1 align="center">Your email: {data.email}</h1>
          <h1 align="center">Your username: {data.username}</h1>
        </Paper>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.render_data(this.state.data)}
        <div className="center">
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            onClick={this.logout}
          >
            Log out
          </Button>
        </div>
      </div>
    );
  }
}
