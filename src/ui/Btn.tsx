import { useContext } from "react";
import { Button } from "@mui/material";
import { StepContext } from "../context/StepContext";
type BtnProps = {
  label: string;
  step: number;
  varient: "contained" | "outlined";
  color: "success" | "primary";
};
const Btn = ({ label, varient, color, step }: BtnProps) => {
  const stepContext = useContext(StepContext);

  if (!stepContext) {
    throw new Error("Form component must be used within a StepProvider");
  }

  const { setStep } = stepContext;

  return (
    <div>
      <Button variant={varient} color={color} onClick={() => setStep(step)}>
        {label}
      </Button>
    </div>
  );
};

export default Btn;
