import React from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';

const styleDiv = {
  padding: '0px 0px',
};

const styleToolbar = {
  background: 'grey',
  padding: '0px',
};

const styleUber = {
  margin: '0px', 
};

const styleTabs = {
  marginLeft: '28px',
  background: 'grey',
};

const StyleTab = {
  TabLeft : {
  padding: '10px 10px',
  borderTop: '4px',
  background: 'grey',
  color: 'black',
  textTransform: 'capitalize',
  },
  TabRight: {
    padding: '0px',
    margin: '20px',
    borderTop: '4px',
    background: 'grey',
    color: 'black',
  },
};

const styleInkBar = {
  background:'white',
};

export default class ToolbarExamplesSimple extends React.Component {

  render() {
    return (
      <div style={styleDiv}>
        <Toolbar style={styleToolbar}>
          <ToolbarGroup>
            <FlatButton 
              label='UBER' 
              hoverColor='white'
              style= {styleUber}
              href="/"
            /> 
           {/*  <Tabs style={styleTabs} inkBarStyle={styleInkBar}>
              <Tab label="Ride" style={StyleTab.TabLeft} href="/bookACab">
    </Tab> */}
              {/* <Tab label="Drive" style={StyleTab.TabLeft} href="/DriverSignIn">
              </Tab> */}
              {/* </Tabs> */}
           
          </ToolbarGroup>
          <ToolbarGroup>
          <FlatButton label="Admin" style={StyleTab.TabRight} href="/adminsignIn"/>
           
            <FlatButton label="Sign Up" style={StyleTab.TabRight} href="/UserSignIn" />
            <FlatButton label="CabBooking" style={StyleTab.TabRight} href="/booking" /> 
            <FlatButton label="Login" style={StyleTab.TabRight} href="/Login" />
            <FlatButton label="Help" style={StyleTab.TabRight} href="/help" />
             
            {/* <FlatButton label="Log out" style={StyleTab.TabRight}  /> */}
          </ToolbarGroup>
        </Toolbar>
      </div>  
    );
  }
}
