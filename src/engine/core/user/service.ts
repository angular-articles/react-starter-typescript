import { UserI } from './models';

export const authService = Object.freeze({
  userInfoKey: 'userInfo',
  setToken(token: string) {
    const userInfo = this.getUserInfo();
    userInfo.token = token;
    this.setUserInfo(userInfo);
  },
  getToken(): string {
    const userInfo = this.getUserInfo();
    return userInfo.token;
  },
  getUserInfo(): UserI {
    const userInfoFromStore = localStorage.getItem(this.userInfoKey) || '{}';
    return JSON.parse(userInfoFromStore);
  },
  setUserInfo(userInfo = {}) {
    const userInfoToStorage = JSON.stringify(userInfo);
    localStorage.setItem(this.userInfoKey, userInfoToStorage);
  },
});
