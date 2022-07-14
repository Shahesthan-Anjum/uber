import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './../Components/HomePage';
import UserSignInPage from './../Components/UserSignInPage';
import NotFoundPage from './../Components/NotFoundPage';
import HelpPage from './../Components/HelpPage';
import ToolBar from './../Components/Toolbar';
import DriverSignInPage from './../Components/DriverSignInPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginPage from './../Components/LoginPage';
import RidePage from './../Components/RidePage';
import MapPage from './../Components/MapPage';
import adminSignIn from './../Components/adminSignIn';

import CabBooking from './../Components/CabBooking';
import PaymentMethod from './../Components/PaymentMethod';
import PaytmPG from './../Components/PaytmPG';
import SBIBankPG from './../Components/SBIBankPG';
import ThankYouMessage from "./../Components/ThankYouMessage";
// import Createdriver from './../Components/Createdriver';
// import Deletedriver from "./../Components/Deletedriver";
// import DriverList from "./../Components/DriverList";


const AppRouter = () => (
    <BrowserRouter>
        <MuiThemeProvider>
            <ToolBar />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/UserSignIn" component={UserSignInPage} />
                <Route path="/DriverSignIn" component={DriverSignInPage} />
                <Route path="/Login" component={LoginPage} />
                <Route path="/help" component={HelpPage} />
                <Route path="/bookACab" component={RidePage} />
          
                <Route path="/map" component={MapPage} />
                <Route path="/adminsignIn" component={adminSignIn} />
               
                <Route path="/booking" exact component={CabBooking} />
        <Route path="/payment" exact component={PaymentMethod} />
        <Route path="/sbipg" exact component={SBIBankPG} />
        <Route path="/submitPaymentDetail" exact component={PaytmPG} />
        <Route path="/thankyou" exact component={ThankYouMessage} />
        {/* <Route path="/addDriver" exact component={Createdriver} />
        <Route path="/delDriver" exact component={Deletedriver} />

        <Route path="/driverlist" exact component={DriverList} /> */}
                <Route component={NotFoundPage} />
            </Switch>
        </MuiThemeProvider>
    </BrowserRouter>
);

export default AppRouter;