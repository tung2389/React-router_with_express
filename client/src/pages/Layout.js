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
          <Link to = "/sign_up"><Button variant = "contained">SIGN UP</Button></Link>
          <br/>
          <br/>
          <Link to = "/profile"><Button variant = "contained">PROFILE</Button></Link>
        </div>
      );
    }
}

export default Layout;