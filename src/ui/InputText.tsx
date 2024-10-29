import { TextField } from "@mui/material";
import { Controller, FieldErrors, FieldValues } from "react-hook-form";

type textProps = {
  label: string;
  name: string;
  control: any;
  errors: FieldErrors<FieldValues>;
  variant?: "outlined" | "standard";
  pattern: RegExp;
};

const InputText = ({
  label,
  variant = "outlined",
  name,
  control,
  errors,
  pattern,
}: textProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{
        required: `${label}is required`,
        pattern: {
          value: pattern,
          message: `Enter a valid ${label}`,
        },
      }}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          variant={variant}
          error={!!errors[name]}
          helperText={errors[name] ? (errors[name]?.message as string) : ""}
          fullWidth
        />
      )}
    />
  );
};

export default InputText;
