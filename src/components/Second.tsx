import Btn from "../ui/Btn";
import InputText from "../ui/InputText";
import { InputSection, Label, Section } from "../wrappers/FormWrapper";
import { inputItems, Props } from "./First";

const Second = ({ control, errors }: Props) => {
  const firstInputs: inputItems[] = [
    { name: "address", label: "Address", variant: "outlined" },
    { name: "zip_code", label: "Zip Code" },
  ];
  const secondInputs: inputItems[] = [
    { name: "caddress", label: "Current Address", variant: "outlined" },
    { name: "czip_code", label: "Zip Code" },
  ];
  return (
    <div className="space-y-4">
      <Section>
        <Label label="Permanent Address">
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
        </Label>
        <Label label="Current Address">
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
        </Label>
      </Section>
      <div className="flex justify-center  gap-4">
        <Btn varient="outlined" color="primary" step={0} label="Back" />
        <Btn varient="contained" color="success" step={2} label="Next" />
      </div>
    </div>
  );
};

export default Second;
