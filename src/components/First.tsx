// import { Button } from "@mui/material";
// import InputText from "../ui/InputText";
import { Control, FieldErrors, FieldValues } from "react-hook-form";

import InputText from "../ui/InputText";
import { InputSection, Label, Section } from "../wrappers/FormWrapper";
import Btn from "../ui/Btn";

export type inputItems = {
  name: string;
  label: string;
  variant?: "outlined" | "standard";
  pattern: RegExp;
};

export type Props = {
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
};
const First = ({ control, errors }: Props) => {
  const firstInputs: inputItems[] = [
    {
      name: "fname",
      label: "First Name",
      variant: "outlined",
      pattern: /^[A-Za-z\s]{2,30}$/,
    },
    { name: "lname", label: "Last Name", pattern: /^[A-Za-z\s]{2,30}$/ },
  ];
  const secondInputs: inputItems[] = [
    {
      name: "age",
      label: "Age",
      variant: "outlined",
      pattern: /^(1[01]?[0-9]|[1-9]?[0-9])$/,
    },
    { name: "occupation", label: "Occupation", pattern: /^[A-Za-z\s]{2,30}$/ },
  ];
  return (
    <div className="space-y-4">
      <Label label="Your Information">
        <Section>
          <InputSection>
            {firstInputs.map((item) => (
              <InputText
                key={item.name}
                {...item}
                control={control}
                errors={errors}
              />
            ))}
          </InputSection>

          <InputSection>
            {secondInputs.map((item) => (
              <InputText
                key={item.name}
                {...item}
                control={control}
                errors={errors}
              />
            ))}
          </InputSection>
        </Section>
      </Label>

      <Btn variant="contained" color="success" step={1} label="Next" />
    </div>
  );
};

export default First;
