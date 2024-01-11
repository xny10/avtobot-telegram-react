import { DisabledArea } from 'ui/disabled-area';
import { RangeSelect } from 'ui/range-select';

type EngineVolumeSelectProps = {
  options: string[];
};

export function EngineVolumeSelect({ options }: EngineVolumeSelectProps) {
  return (
    <DisabledArea disabled={true}>
      <RangeSelect name="engineVolume" label="Объём двигателя, л" options={options} />
    </DisabledArea>
  );
}
