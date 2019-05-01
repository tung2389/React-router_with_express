import Button from '@material-ui/core/Button';
import React from 'react';
import { Link } from 'react-router-dom';

class Layout extends React.Component{
    render(){
      return(
        <div>
          <Link to = "/login"><Button variant = "contained">LOG IN</Button></Link>
          <br/>
          <br/>
          <Link to = "/register"><Button variant = "contained">REGISTER</Button></Link>
          <br/>
          <br/>
          <Link to = "/dashboard"><Button variant = "contained">DASHBOARD</Button></Link>
        </div>
      );
    }
}

export default Layout;