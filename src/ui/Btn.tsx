import { useContext } from "react";
import { Button } from "@mui/material";
import { StepContext } from "../context/StepContext";

type BtnProps = {
  label: string;
  step: number;
  type?: "button" | "submit";
  variant: "contained" | "outlined";
  color: "success" | "primary";
};

const Btn = ({ label, variant, color, step, type = "button" }: BtnProps) => {
  const stepContext = useContext(StepContext);

  if (!stepContext) {
    throw new Error("Form component must be used within a StepProvider");
  }

  const { setStep } = stepContext;

  const handleClick = () => {
    if (type === "button") {
      setStep(step);
    }
  };

  return (
    <Button type={type} variant={variant} color={color} onClick={handleClick}>
      {label}
    </Button>
  );
};

export default Btn;
