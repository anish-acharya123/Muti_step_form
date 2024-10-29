import { useContext } from "react";
import { useForm } from "react-hook-form";
import { StepContext } from "../context/StepContext";
import First from "./First";
import Second from "./Second";
import { FormWrapper } from "../wrappers/FormWrapper";

const Form = () => {
  const stepContext = useContext(StepContext);

  if (!stepContext) {
    throw new Error("Form component must be used within a StepProvider");
  }

  const { step, setStep } = stepContext;
//   console.log(step);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const Switchstep = (currentStep: number) => {
    switch (currentStep) {
      case 0:
        return <First control={control} errors = {errors}/>;
      case 1:
        return <Second control={control} errors={errors} />;
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper>{Switchstep(step)}</FormWrapper>
    </form>
  );
};

export default Form;
