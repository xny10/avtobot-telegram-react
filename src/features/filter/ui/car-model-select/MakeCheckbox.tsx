import { LabeledCheckbox } from 'ui/labeled-checkbox';

type ModelCheckboxProps = {
  modelName: string;
  checked: boolean;
  onCheck: (makeName: string) => void;
};

export function ModelCheckbox({ checked, modelName, onCheck }: ModelCheckboxProps) {
  return (
    <LabeledCheckbox checked={checked} onCheck={() => onCheck(modelName)}>
      {modelName}
    </LabeledCheckbox>
  );
}
