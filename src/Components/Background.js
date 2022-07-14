import React from 'react';
import Image from './Images/background.png';
import DriverSignUpHome from './DriverSignUpHome';

const styleDiv = {
    height: '0px',
    width: '100%',
    background: 'grey',
    paddingRight: '9.3vw',
    paddingLeft: '9.3vw'
};

const styleTextDiv = {
    padding: '0 6.6vw', 
    height: '240px',
    width: '100%',
};

const style = {
    paddingTop: '44px',
    paddingBottom: '20px',
    marginBottom: '14px'
};

const stylePA = {
    margin: '0px',
    fontFamily: 'ff-clan-web-pro, "Helvetica Neue", Helvetica, sans-serif' ,
    fontWeight: '400px',
    fontSize: '44px',
    lineHeight: '60px',
    letterSpacing: '-.03em'
};

const stylePB = {
    fontFamily: 'ff-clan-web-pro, Helvetica Neue, Helvetica, sans-serif ',
    //fontWeight: '200',
    fontSize: '44px',
    lineHeight: '40px',
    letterSpacing: '-.03em',
    margin: '0'
};

const backgroundImage = {
    backgroundImage: `url(${Image})`,
    height: '900px',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
};

const SvgIconExampleSimple = () => (
    <div>
        <div  style={styleDiv}>
            <div style={styleTextDiv}>
                <div style={style}>
                    <p style={stylePA}>Uber Clone App</p>
                    <p style={stylePB}>Easy and Convenient to use</p>
                    <div>
                    <DriverSignUpHome />
                    </div>        
                </div>
            </div>
        </div>
        <div style={backgroundImage}>
        </div>
    </div>
  );

  export default SvgIconExampleSimple;