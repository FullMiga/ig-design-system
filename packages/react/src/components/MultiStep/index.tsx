import { Label, MultiStepContainer, Step, Steps } from "./styles";

export interface MultistepProps {
  size: number;
  currentStep?: number;
}

export function MultiStep({ size, currentStep = 1 }: MultistepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Step {currentStep} of {size}
      </Label>
      <Steps css={{ "--steps-size": size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />;
        })}
      </Steps>
    </MultiStepContainer>
  );
}

MultiStep.displayname = "MultiStep";
