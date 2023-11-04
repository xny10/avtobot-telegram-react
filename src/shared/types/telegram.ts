export type IWebApp = typeof window.Telegram.WebApp;

export type IWebAppInitData = IWebApp['initDataUnsafe'];
export type IUser = IWebApp['initDataUnsafe']['user'];
