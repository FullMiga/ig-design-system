import { ComponentRef, forwardRef, type InputHTMLAttributes } from "react";
import { Input, Prefix, TextInputContainer } from "./styles";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
}

export const TextInput = forwardRef<ComponentRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    );
  }
);

TextInput.displayName = "TextInput";
