import { LabeledCheckbox } from 'ui/labeled-checkbox';

type MakeCheckboxProps = {
  makeName: string;
  checked: boolean;
  onCheck: (makeName: string) => void;
};

export function MakeCheckbox({ checked, makeName, onCheck }: MakeCheckboxProps) {
  return (
    <LabeledCheckbox checked={checked} onCheck={() => onCheck(makeName)}>
      {makeName}
    </LabeledCheckbox>
  );
}
