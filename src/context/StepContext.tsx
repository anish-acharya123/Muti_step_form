import { createContext, useState } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

type contextProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
export const StepContext = createContext<contextProps | undefined>(undefined);

const StepProvider = ({ children }: ProviderProps) => {
  const [step, setStep] = useState(0);

  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  );
};

export default StepProvider;
