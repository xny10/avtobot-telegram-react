import { Typography } from '@mui/material';
import { BaseLayout } from 'ui/base-layout';

export function StartupNotTelegram() {
  return (
    <BaseLayout title="Ошибка">
      <Typography variant="h5">Пользователь не найден</Typography>
    </BaseLayout>
  );
}
