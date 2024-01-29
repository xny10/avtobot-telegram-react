import { KEY_TOKEN, tg } from 'shared/config/consts';

class AuthService {
  constructor(private readonly tg: WebApp) {}
  onAppStarted() {
    const token = this.createToken(this.tg.initData);
    localStorage.setItem(KEY_TOKEN, token);
  }

  private createToken(telegramInitData: WebApp['initData']) {
    const data = Object.fromEntries(new URLSearchParams(telegramInitData));

    const token = Object.keys(data)
      .map((key) => `${key}=${data[key]}`)
      .sort()
      .join('\n');

    return btoa(token);
  }

  getToken() {
    return localStorage.getItem(KEY_TOKEN);
  }
}

export const authService = new AuthService(tg);
