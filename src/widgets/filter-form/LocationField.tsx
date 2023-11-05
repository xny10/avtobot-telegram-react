import { TextField } from '@mui/material';
import { TabbedInput } from 'features/filter/ui/tabbed-input';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export function LocationField() {
  const { control } = useFormContext();

  const [activeTabKey, setActiveTabKey] = useState('regions');

  return (
    <TabbedInput
      onClear={() => {}}
      activeTabKey={activeTabKey}
      setActiveTabKey={(tabKey) => setActiveTabKey(tabKey)}
      variants={[
        { tabKey: 'regions', title: 'Регионы', Input: <TextField fullWidth label="Регионы" /> },
        { tabKey: 'city', title: 'Город', Input: <TextField fullWidth label="Город" /> },
      ]}
    />
  );
}
