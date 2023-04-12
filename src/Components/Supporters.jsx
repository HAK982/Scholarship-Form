import React from 'react'
import './Supporters.css'
import FacultySignUp from './FacultySignUp'
import AlumniSignUp from './AlumniSignUp'
import OtherPersonSignUp from './OtherPersonSignUp'
import FacultySignIn from './FacultySignIn'
import AlumniSignIn from './AlumniSignIn'
import OtherPersonSignIn from './OtherPersonSignIn'


function Supporters() {
  return (
    <div>
       {/* <h6 className='support'>Select Supporter Type:</h6> 
    <div class="containered">
    <div class="btn-group btn-group-toggle" data-toggle="buttons" >
      <button class="btn2 btn-dark" >FACULTY MEMBER</button>
      <button class="btn2 btn-dark" >ALUMNI </button>
      <button class="btn2 btn-dark">OTHER PERSON</button>
    </div>
  </div> */}

  {/* /////////////////////////////          SIGN UP PAGES          ///////////////////////////// */}

  <FacultySignUp/>
  {/* <AlumniSignUp/> */}
  {/* <OtherPersonSignUp/> */}


  {/* /////////////////////////////////       SIGN IN PAGES          ////////////////////////////////// */}

  {/* <FacultySignIn/> */}
  {/* <AlumniSignIn/> */}
  {/* <OtherPersonSignIn/> */}




  </div>

  )
}

export default Supporters