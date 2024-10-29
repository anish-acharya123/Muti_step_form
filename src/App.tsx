import React from "react";
import StepComponent from "./ui/StepComponent";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Group>
        <h1 className="text-4xl text-red-400 font-medium uppercase">
          Multi-Step Form
        </h1>
        <StepComponent />
        <Form />
      </Group>
    </>
  );
}

export default App;

const Group = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex  flex-col    min-h-screen justify-center items-center ">
      <div className="border-2 p-10  text-center content-center space-y-10">
        {children}
      </div>
    </div>
  );
};
