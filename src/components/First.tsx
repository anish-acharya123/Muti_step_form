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
};

export type Props = {
  control: Control<FieldValues>;
  errors: FieldErrors<FieldValues>;
};
const First = ({ control, errors }: Props) => {
  const firstInputs: inputItems[] = [
    { name: "fname", label: "First Name", variant: "outlined" },
    { name: "lname", label: "Last Name" },
  ];
  const secondInputs: inputItems[] = [
    { name: "age", label: "Age", variant: "outlined" },
    { name: "occupation", label: "Occupation" },
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
