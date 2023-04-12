import React, { useState } from 'react';
import './StudentSignUp.css';
import {Tabs,Tab,AppBar} from '@material-ui/core'
import Stepp from './SteppSignUp'
import Supporters from './Supporters';



export default function StudentSignUp() {

  const [value,setValue]=React.useState(0)
  const handleTabs=(e,val)=>{
    console.warn(val)
    setValue(val)
  }


  return (
    <div>
      <img class="logo" src="images/LOGONEDUET2LOGO_1.png" alt="" />
      <h1 class="main_head">Welcome To Scholarship Portal</h1>
      <div className="container">
        <div className="left">
         <AppBar position='static' className="custom-appbar" style={{backgroundColor: 'white', color:'black'}}>
            <Tabs value={value} onChange={handleTabs}>
              <Tab label='Student' id="student-tab" aria-controls="student-panel" />
              <Tab label='Supporter' id="supporter-tab" aria-controls="supporter-panel" />
            </Tabs>
            <TabPanel value={value} index={0} id="student-panel" aria-labelledby="student-tab">
              <Stepp/>
          </TabPanel>
            <TabPanel value={value} index={1} id="supporter-panel" aria-labelledby="supporter-tab"><Supporters/></TabPanel>
         </AppBar>
         
        </div>

        <div className="right">
          <p>CLIPART to be added!</p>
        </div>
      </div>
    </div>
  );
}

function TabPanel(props) 
{
  const{children,value,index,id}=props;
  return(
    <div role="tabpanel" hidden={value !== index} id={id} aria-labelledby={id}>
      {
        value===index && (
          <h1>{children}</h1>
        )
      }
    </div>
  )
}







