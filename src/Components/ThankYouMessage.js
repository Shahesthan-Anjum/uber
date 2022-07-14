import React, { Component } from "react";
import { Link } from "react-router-dom";
import Payments from './Images/payments.png';
import Avatar from 'material-ui/Avatar';
import { json } from "body-parser";

class ThankYouMessage extends Component {
  render() {
    return (
      <div>
        <center>
          {/* <h2> You will get the affirmation message by SMS and Email Soon.</h2> */}
          <Avatar src={Payments} size='300px'  /> 
          <br/>
          <br/>
          <Link
            to="/"
            style={{
             
              padding: 25, 
              paddingRight: 30,
              fontSize: 15
            }}
          >
            {" "}
            Go to Home{" "}
          </Link>
        </center>
      </div>
    );
  }
}

export default ThankYouMessage;