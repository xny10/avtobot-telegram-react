import { tg } from 'shared/config/consts';

class AuthService {
  constructor(private readonly tg: WebApp) {}
}

export const authService = new AuthService(tg);
