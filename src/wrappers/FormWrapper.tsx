const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-10">{children}</div>;
};

const Section = ({ children }: { children: React.ReactNode }) => {
  return <div className="  flex md:flex-row bg-green- gap-4 flex-col">{children}</div>;
};

const InputSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-4">{children}</div>;
};

const Label = ({
  children,
  label,
}: {
  children?: React.ReactNode;
  label: string;
}) => {
  return (
    <div>
      <p className="text-left font-medium text-xl mb-4">{label}</p>
      {children}
    </div>
  );
};
export { FormWrapper, Section, InputSection, Label };
