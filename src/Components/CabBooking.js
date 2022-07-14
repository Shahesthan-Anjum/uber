import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import "antd/dist/antd.css";
import "./UserSignIn.css";
import cb1 from "./Images/cb.jpg";
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import SignInImage from './Images/download.jpg';
import { Form, Input, Button } from "antd";
import { locales } from "moment";
import paymentbackground from './paymentbackground';

const stylePaper = {
  height: '330px',
  width: '400px',
  background: '#f8f8f9',
  position: 'relative',
  marginLeft:'35%',
  marginTop: '70px'
};

const styleText = {
  marginLeft: '100px',
  marginTop: '-50px',
  fontSize: '1.71429rem',
  fontFamily: 'ff-clan-web-pro,"Helvetica Neue",Helvetica,sans-serif!important',
  fontWeight: '400'
};



//export the variable to access from other components

export const SOURCE = "SOURCE";
export const DESTINATION = "DESTINATION";
export const NOOFCUSTOMER = "NOOFCUSTOMER";

class CabBooking extends Component {
  constructor(props) {
    super(props);

    this.checkSource = this.checkSource.bind(this);
    this.checkDestination = this.checkDestination.bind(this);
    this.checkCustomer = this.checkCustomer.bind(this);
    this.storeDetails = this.storeDetails.bind(this);

    //Equal the state to empty
    this.state = {
    
      
      source: "",
      destination: "",
      noofcustomer: ""
    };
  }
  

  //get the input data and store it on variable and
  //display the input data value in console

  //store the input data into states

  checkSource(e) {
    var soList = document.getElementById("soList").value;
    this.setState({
      source: e.target.value
    });
    console.log("Source : " + soList);
  }
  checkDestination(e) {
    var deList = document.getElementById("deList").value;
    this.setState({
      destination: e.target.value
    });
    console.log("Destination : " + deList);
  }
  checkCustomer(e) {
    var customer = document.getElementById("customer").value;
    this.setState({
      noofcustomer: e.target.value
    });
    console.log("No of Customer : " + customer);
  }

  //store the state value into variable
  //check if state is not equal to empty if not then save
  //that data into session storage
  storeDetails(e) {
    e.preventDefault();
  
   
    let source = this.state.source;
    let destination = this.state.destination;
    let noofcustomer = this.state.noofcustomer;
    
    //Validating the source, If validated store the data to sessionStorage.
    if (source === "") {
      alert("SOURCE cannot be empty");
      //Redirect the same component when storeMethod is called
      this.props.history.push(`/booking`);
    } else if (source !== "") {
      sessionStorage.setItem(SOURCE, source);
      //go to another component when storeMethod is called
      this.props.history.push(`/payment`);
    }

    //Validating the destination, If validated store the data to sessionStorage.
    if (destination === "") {
      alert("DESTINATION cannot be empty");
      //Redirect the same component when storeMethod is called
      this.props.history.push(`/booking`);
    } else if (destination !== "") {
      sessionStorage.setItem(DESTINATION, destination);
      //go to another component when storeMethod is called
      this.props.history.push(`/payment`);
    }

    //Validating the nooftickets, If validated store the data to sessionStorage.
    if (noofcustomer === "") {
      alert("NO OF Customer cannot be empty");
      //Redirect the same component when storeMethod is called
      this.props.history.push(`/booking`);
    } else if (noofcustomer !== "") {
      sessionStorage.setItem(NOOFCUSTOMER, noofcustomer);
      //go to another component when storeMethod is called
      this.props.history.push(`/payment`);
    }
    axios
.post("http://localhost:8087/addmap")
  .then(res => console.log(res.data));

  }

  render() {
    return (
      <Router>
        <div img src = {cb1} style={{ backgroundImage: "url(" + { cb1 } + ")" }}>
          <div className="container" style={{ marginTop: 0 }}>
            <center>
              <div className="card" style={{ width: 600 }}>
                <h5
                  className="card-header info-color white-text text-center py-4"
                  style={{ backgroundColor: " #0000FF " }}
                >
                  <strong style={{ color: "white" }}>
                    {" "}
                    Book A Cab {" "}
                  </strong>
                </h5>

                <div className="card-body px-lg-5">
                  <form
                    className="text-center"
                    style={{ color: "#757575" }}
                    onSubmit={this.storeDetails}
                    
                  >
                

                    <label> Source : </label>
                    <select
                      class="browser-default custom-select mb-4"
                      id="soList"
                      onChange={this.checkSource}
                    >
                      <option value="" disabled selected>
                        Choose option
                      </option>
                      <option value="Kengeri"> Kengeri </option>
                      <option class="special" value="Ksr Bangalore "> Ksr Bangalore </option>
                      <option value="Keshwapur"> Keshwapur </option>
                      <option value="Hubli"> Hubli </option>
                      <option value="Dumdum"> Dumdum </option>
                    </select><br></br>
                    <label> Destination : </label>
                    <select
                      class="browser-default custom-select mb-4"
                      id="deList"
                      onChange={this.checkDestination}
                    >
                      <option value="" disabled selected>
                        Choose option
                      </option>
                      <option value="Ksr Bangalore "> Ksr Bangalore  </option>
                      <option value="Kengeri"> Kengeri </option>
                      <option value="Gokul road"> Gokul road </option>
                      <option value="Dharwad"> Dharwad </option>
                      <option value="Howrah"> Howrah </option>
                    </select>
                    <br></br>
                    <label> No of Customers : </label>
                    <input
                      type="text"
                      placeholder="No of Customer"
                      className="form-control mb-4"
                      id="customer"
                      onChange={this.checkCustomer}
                    />

                    <button
                      className="btn btn-outline-primary btn-rounded btn-block z-depth-0 my-4 waves-effect"
                      type="submit"
                    >
                      NEXT
                    </button>
                  </form>
                </div>
              </div>
            </center>
          </div>
        </div>
      </Router>
    );
  }
}

export default CabBooking;