import React, { Component } from "react";
import { SOURCE, DESTINATION, NOOFCUSTOMER } from "./CabBooking";

export const TOTALAMMOUNT = "TOTALAMMOUNT";

export default class CalPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: ""
    };
  }

  calPay() {
    let total = this.state.total;

    if (SOURCE === "Ksr Bangalore" && DESTINATION === "kengeri") {
      // this.state.total = NOOFCUSTOMER * 12;
      this.setState({ total: NOOFCUSTOMER * 12 });
      sessionStorage.setItem(TOTALAMMOUNT, total);
    } else if (SOURCE === "kengeri" && DESTINATION === "Ksr Bangalore") {
      this.setState({ total: NOOFCUSTOMER * 10 });
      sessionStorage.setItem(TOTALAMMOUNT, total);
    }
  }

  render() {
    return <div />;
  }
}