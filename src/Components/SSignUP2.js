import React from "react";
import { TextField, MenuItem,Checkbox } from "@mui/material";

export default function SSignUP2() {
  return (
    <div style={{ height: "260px", overflowY: "scroll" }}>
      <h6 className="please mid">Fill this information</h6>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p
          className="para"
          style={{ marginRight: "70px", marginLeft: "145px" }}
        >
          Type of Student:
        </p>
        <TextField
          style={{
            m: 1,
            flex: 1,
            marginRight: "170px",
            marginBottom: "10px",
            marginLeft: "20px",
          }}
          label="Select Options"
          select
          size="small"
          variant="filled"
        >
          <MenuItem value="option1">Merit Based</MenuItem>
          <MenuItem value="option2">Need Based</MenuItem>
          <MenuItem value="option3">Based on Merit and Need</MenuItem>
        </TextField>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p
          className="para"
          style={{ marginRight: "70px", marginLeft: "145px" }}
        >
          Select Department:
        </p>
        <TextField
  style={{ m: 1, flex: 1, marginRight: "170px", marginBottom: "10px" }}
  label="Select Options"
  select
  size="small"
  variant="filled"
  SelectProps={{
    MenuProps: {
      style: {
        maxHeight: 200,
      },
    },
  }}
>
          <MenuItem value="option1">Civil Engineering</MenuItem>
          <MenuItem value="option2">
            Urban and Infrastructure Engineering
          </MenuItem>
          <MenuItem value="option3">Petroleum Engineering</MenuItem>
          <MenuItem value="option4">Mechanical Engineering</MenuItem>
          <MenuItem value="option5">Textile Engineering</MenuItem>
          <MenuItem value="option6">
            Industrial and Manufacturing Engineering
          </MenuItem>
          <MenuItem value="option7">Automotive and Marine Engineering</MenuItem>
          <MenuItem value="option8">Earthquake Engineering</MenuItem>
          <MenuItem value="option9">Electrical Engineering</MenuItem>
          <MenuItem value="option10">
            Computer and Information Systems Engineering
          </MenuItem>
          <MenuItem value="option11">Electronic Engineering</MenuItem>
          <MenuItem value="option12">Bio-Medical Engineering</MenuItem>
          <MenuItem value="option13">Telecommunications Engineering</MenuItem>
          <MenuItem value="option14">Software Engineering</MenuItem>
          <MenuItem value="option15">
            Computer Science & Information Technology
          </MenuItem>
          <MenuItem value="option16">Department of Mathematics</MenuItem>
          <MenuItem value="option17">Department of Physics</MenuItem>
          <MenuItem value="option18">Department of Chemistry</MenuItem>
          <MenuItem value="option19">
            English Linguistics & Allied Studies
          </MenuItem>
          <MenuItem value="option20">Department of Essential Studies</MenuItem>
          <MenuItem value="option21">Chemical Engineering</MenuItem>
          <MenuItem value="option22">Materials Engineering</MenuItem>
          <MenuItem value="option23">Metallurgical Engineering</MenuItem>
          <MenuItem value="option24">
            Polymer and Petrochemical Engineering
          </MenuItem>
          <MenuItem value="option25">Food Engineering</MenuItem>
          <MenuItem value="option26">Environmental Engineering</MenuItem>
          <MenuItem value="option27">
            Department of Architecture and Planning
          </MenuItem>
          <MenuItem value="option28">
            Department of Economics and Management Sciences
          </MenuItem>
          <MenuItem value="option29">Civil Engineering [TIEST]</MenuItem>
          <MenuItem value="option30">
            Computer Science and Technology [TIEST]
          </MenuItem>
        </TextField>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p
          className="para"
          style={{ marginRight: "70px", marginLeft: "145px" }}
        >
          Select Degree:
        </p>
        <TextField
          style={{
            m: 1,
            flex: 1,
            marginRight: "170px",
            marginBottom: "10px",
            marginLeft: "36px",
          }}
          label="Select Options"
          select
          size="small"
          variant="filled"
        >
          <MenuItem value="option1">BS (Bachelor of Science)</MenuItem>
          <MenuItem value="option2">BE (Bachelor of Engineering</MenuItem>
          <MenuItem value="option3">MS (Masters Programme)</MenuItem>
          <MenuItem value="option4">Ph.D.</MenuItem>
        </TextField>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p
          className="para"
          style={{ marginRight: "70px", marginLeft: "145px" }}
        >
          Select <br />
          Academic Year:
        </p>
        <TextField
          style={{
            m: 1,
            flex: 1,
            marginRight: "170px",
            marginBottom: "10px",
            marginLeft: "24px",
          }}
          label="Select Options"
          select
          size="small"
          variant="filled"
        >
          <MenuItem value="option1">First Year</MenuItem>
          <MenuItem value="option2">2nd Year</MenuItem>
          <MenuItem value="option3">3rd Year</MenuItem>
          <MenuItem value="option4">4th / Final Year</MenuItem>
        </TextField>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p
          className="para"
          style={{ marginRight: "70px", marginLeft: "145px" }}
        >
          Select Semester <br />
          (on-going):
        </p>
        <TextField
          style={{
            m: 1,
            flex: 1,
            marginRight: "170px",
            marginBottom: "10px",
            marginLeft: "25px",
          }}
          label="Select Options"
          select
          size="small"
          variant="filled"
        >
          <MenuItem value="option1">1st Semester</MenuItem>
          <MenuItem value="option2">2nd Semester</MenuItem>
          <MenuItem value="option3">3rd Semester</MenuItem>
          <MenuItem value="option4">4th Semester</MenuItem>
          <MenuItem value="option5">5th Semester</MenuItem>
          <MenuItem value="option6">6th Semester</MenuItem>
          <MenuItem value="option7">7th Semester</MenuItem>
          <MenuItem value="option8">8th Semester</MenuItem>
        </TextField>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p
          className="para"
          style={{ marginRight: "70px", marginLeft: "145px" }}
        >
          Batch:
        </p>
        <TextField
          style={{
            m: 1,
            flex: 1,
            marginRight: "170px",
            marginBottom: "10px",
            marginLeft: "90px",
          }}
          label="Select Options"
          select
          size="small"
          variant="filled"
        >
          <MenuItem value="option1">2019</MenuItem>
          <MenuItem value="option2">2020</MenuItem>
          <MenuItem value="option3">2021</MenuItem>
          <MenuItem value="option4">2022</MenuItem>
        </TextField>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p
          className="para"
          style={{ marginRight: "70px", marginLeft: "145px" }}
        >
          Current CGPA:
        </p>
        <TextField
          style={{
            m: 1,
            flex: 1,
            marginRight: "170px",
            marginBottom: "10px",
            marginLeft: "22px",
          }}
          label="Enter CGPA (e.g. 3.00)"
          size="small"
          variant="filled"
          type="text"
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '200px' }}>
  <Checkbox color="primary" />
  <p className='para' style={{ marginLeft: '5px', fontSize: '15px', color: 'gray' }}>I agree to terms and conditions</p>
</div>
    </div>
  );
};
