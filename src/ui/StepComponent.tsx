import { Step, StepLabel, Stepper } from "@mui/material";
import { useContext } from "react";
import { StepContext } from "../context/StepContext";

const StepComponent = () => {
  const stepContext = useContext(StepContext);

  if (!stepContext) {
    throw new Error("Form component must be used within a StepProvider");
  }

  const { step } = stepContext;

  const steps = ["Information", "Address", "Contact Detail"];

  return (
    <Stepper activeStep={step} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepComponent;
