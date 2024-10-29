import { TextField } from "@mui/material";
import { Controller, FieldErrors, FieldValues } from "react-hook-form";

type textProps = {
  label: string;
  name: string;
  control: any;
  errors: FieldErrors<FieldValues>;
  variant?: "outlined" | "standard";
};

const InputText = ({
  label,
  variant = "outlined",
  name,
  control,
  errors,
}: textProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{ required: `${label}is required` }}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          variant={variant}
          error={!!errors.firstName}
          helperText={errors.firstName ? errors.firstName.message : ""}
          fullWidth
        />
      )}
    />
  );
};

export default InputText;
