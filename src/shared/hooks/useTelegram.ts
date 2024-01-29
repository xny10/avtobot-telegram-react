import { tg } from 'shared/config/consts';

export function useTelegram() {
  const user = tg.initDataUnsafe?.user || null;

  return { tg, user };
}
