import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SSP1 from "./SSignUP1";
import SSP2 from "./SSignUP2";
import img1 from "../image/mark.gif";
import SSignUP1 from "./SSignUP1";
import SSignUP2 from "./SSignUP2";

const steps = ["Personal Info", "Additional Info"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel
                sx={{
                  m: 2,
                  width: "180px",
                  marginLeft: "90px",
                  marginRight: "39px",
                }}
                {...labelProps}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            <div>
              <h1 style={{ textAlign: "center", marginTop: "50px" }}>
                Registration Completed
              </h1>
              <img className="containere" src={img1} alt="" />
            </div>
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          {activeStep === 0 && <SSignUP1 />}
          {activeStep === 1 && <SSignUP2 />}
          <Box
            sx={{ display: "flex", flexDirection: "row", pt: 2 }}
            style={{ position: "relative", marginTop: "50px" }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              variant="outlined"
              style={{ position: "absolute", left: "130px", bottom: "25px" }}
            >
              {" "}
              Back{" "}
            </Button>

            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              onClick={handleNext}
              variant="outlined"
              style={{ position: "absolute", right: "125px", bottom: "25px" }}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
