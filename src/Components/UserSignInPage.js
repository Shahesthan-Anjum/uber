import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserSignIn from './UserSignIn'
import Background from './Background';

const App = () => (
    <MuiThemeProvider>
     
      <UserSignIn />
      
    </MuiThemeProvider>
  );
  
  export default App;