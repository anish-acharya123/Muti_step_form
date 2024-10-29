import Btn from "../ui/Btn";
import InputText from "../ui/InputText";
import { InputSection, Label, Section } from "../wrappers/FormWrapper";
import { inputItems, Props } from "./First";

const Third = ({ control, errors }: Props) => {
  const firstInputs: inputItems[] = [
    {
      name: "pnumber",
      label: "Number",
      pattern: /^(\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/,
    },
    {
      name: "email",
      label: "Email Address",
      pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    },
  ];
  const secondInputs: inputItems[] = [
    {
      name: "github",
      label: "Github Link",
      variant: "outlined",
      pattern: /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+(\/)?$/,
    },
    {
      name: "linkedin",
      label: "Linkedin Link",
      pattern: /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/,
    },
  ];
  return (
    <div className="space-y-4">
      <Label label="Contact Information">
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

      <div className="flex justify-center  gap-4">
        <Btn variant="outlined" color="primary" step={1} label="Back" />
        <Btn
          type="submit"
          variant="contained"
          color="success"
          step={0}
          label="Submit"
        />
      </div>
    </div>
  );
};

export default Third;
