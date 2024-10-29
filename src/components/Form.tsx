import { useContext } from "react";
import { useForm } from "react-hook-form";
import { StepContext } from "../context/StepContext";
import First from "./First";
import Second from "./Second";
import { FormWrapper } from "../wrappers/FormWrapper";
import Third from "./Third";

const Form = () => {
  const stepContext = useContext(StepContext);

  if (!stepContext) {
    throw new Error("Form component must be used within a StepProvider");
  }

  const { step, setStep } = stepContext;

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = async (data: any) => {
    const isValid = await trigger();
    
    if (isValid) {
      console.log(data);
      setStep(0);
      alert("congratulation");
      reset();
    }
  };

  const Switchstep = (currentStep: number) => {
    switch (currentStep) {
      case 0:
        return <First control={control} errors={errors} />;
      case 1:
        return <Second control={control} errors={errors} />;
      case 2:
        return <Third control={control} errors={errors} />;
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
