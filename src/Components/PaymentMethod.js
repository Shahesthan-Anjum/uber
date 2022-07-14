import React, { Component } from "react";

import visalogo from './Images/visalogo.png';
//import masterlogo from './Images/masterlogo.png';

import {SOURCE, DESTINATION, NOOFCUSTOMER } from "./CabBooking";




export const TOTAL = "TOTAL";

class PaymentMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: "",
   
      source: "",
      destination: "",
      noofcustomer: "",
      total: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    //setting the state value to session storage value



    this.setState({ source: sessionStorage.getItem(SOURCE) });
    this.setState({ destination: sessionStorage.getItem(DESTINATION) });
    this.setState({ noofcustomer: sessionStorage.getItem(NOOFCUSTOMER) });
    this.setState({ total: sessionStorage.getItem(NOOFCUSTOMER) * 25 });
    this.setState({
    });
    this.setState({
      total:
        sessionStorage.getItem(NOOFCUSTOMER) * 25 -
        sessionStorage.getItem(NOOFCUSTOMER) * 25 * (10 / 100)
    });
  }

  handleChange(e) {
    this.setState({
      method: e.target.value
    });

    let total = this.state.total;
    sessionStorage.setItem(TOTAL, total);
  }
  handleSubmit(e) {
    e.preventDefault();
    let method = this.state.method;

    if (method === "creditcard") {
      this.props.history.push(`/sbipg`);
    } else if (method === "mobile") {
      this.props.history.push(`/submitPaymentDetail`);
    }
    if(this.componentDidMount()){
      fetch("", {
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "accept": "application/json",
          "Access-Control-Allow-Origin": "*"
          
        },
        "body": JSON.stringify({
          trainid: this.state.trainid,
          source: this.state.source,
          destination: this.state.destination,
          noofcustomer: this.state.noofcustomer,
        })
      })
      .then(response => response.json())
      .then(response => {
       alert("Your customer is not booked")
      })
      .catch(err => {
        alert("Your customer is successfully booked")
      });
    }

  }
  

  render() {
    return (
      <div style={{ backgroundColor: "" }}>
        <div className="container" style={{ marginTop: 0 }}>
          <center>
            <div className="card" style={{ width: 600 }}>
              <h5
                className="card-header info-color white-text text-center py-4"
                style={{ backgroundColor: " " }}
              >
                <strong style={{ color: "white" }}>
                  {" "}
                  <h5>Your Details</h5><br/><br/>
                  <h6>
                    {" "}
                    Source :{" "}
                    <input
                      type="text"
                      value={this.state.source}
                      readOnly
                      style={{ backgroundColor: "" }}
                    />{" "}
                  </h6>
                  <h6><br/><br/>
                    {" "}
                    Destination :{" "}
                    <input
                      type="text"
                      value={this.state.destination}
                      readOnly
                      style={{ backgroundColor: "" }}
                    />
                  </h6>
                  <h6><br/><br/>
                    {" "}
                    No of Customer :{" "}
                    <input
                      type="text"
                      value={this.state.noofcustomer}
                      readOnly
                      style={{ backgroundColor: "" }}
                    />
                  </h6><br/><br/>{" "}
              
                  <h6>
                    {" "}
                    Your Total Bill :{" "}
                    <input
                      type="text"
                      value={this.state.total}
                      readOnly
                      style={{ backgroundColor: "" }}
                    />
                  </h6><br/><br/>
                  Select the Payment Method
                  <br />
                </strong>
              </h5>

              <div className="card-body px-lg-5">
                <form
                  className="text-center"
                  style={{ color: "#757575" }}
                  onSubmit={this.handleSubmit}
                >
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="creditcard"
                      name="method"
                      value="creditcard"
                      onChange={this.handleChange}
                    />
                    <label className="custom-control-label" for="creditcard">
                      Credit Card
                      <div>
                        <img src={visalogo} width="50" height="20" alt="" />
                        
                      </div>
                    </label><br/><br/>
                  </div>
                  <div className="custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="mobilenum"
                      name="method"
                      value="mobile"
                      onChange={this.handleChange}
                    />
                    <label className="custom-control-label" for="mobilenum">
                      Mobile Number (Payment will added to the mobile bill)
                    </label>
                  </div>
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
    );
  }
}

export default PaymentMethod;