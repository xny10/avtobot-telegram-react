import { UserContext } from 'app/context/UserContext';
import { PropsWithChildren } from 'react';
import { useTelegram } from 'shared/hooks/useTelegram';
import { telegramInitDataMock } from 'shared/mocks/telegramInitData.mock.';

type TelegramUserProviderProps = PropsWithChildren;

export function TelegramUserProvider({ children }: TelegramUserProviderProps) {
  const { tg, user } = useTelegram();
  console.log(tg);

  const tgUser = window.location.host === 'localhost:3000' ? user : telegramInitDataMock.user;

  return <UserContext.Provider value={tgUser}>{children}</UserContext.Provider>;
}
