import { makeAutoObservable } from 'mobx';
import { userDataResponse, userType, ErrorResponse } from './storeTypes';
import {
  checkAuthService,
  userLogin,
  userLogout,
  userRegister,
} from './service';

class UserStore {
  error: ErrorResponse | null = null;
  user: userType = {
    id: '',
    username: '',
    botToken: '',
    chatId: [],
    isAuth: false,
  };

  //временно
  //   isAuth: boolean = false;
  isRegister: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.checkAuth();
  }

  setError = (error: ErrorResponse) => {
    this.error = error;
    console.log('this.error', this.error.message);
  };

  userData = (data: userDataResponse) => {
    this.user.isAuth = true;
    this.user.id = data.userId;
    this.user.username = data.username;
  };

  userLogoutData = () => {
    this.user.isAuth = false;
    this.user.id = '';
    this.user.username = '';
  };

  toggleIsRegister = (data: boolean) => {
    this.isRegister = true;
  };

  checkAuth = () => {
    checkAuthService(this.userData.bind(this));
  };

  setlogin = (data: { username: string; password: string }) => {
    userLogin(this.userData.bind(this), this.setError.bind(this), data);
  };

  setLogout = () => {
    userLogout(this.userLogoutData.bind(this));
  };

  setRegisterData = (data: { username: string; password: string }) => {
    userRegister(this.toggleIsRegister.bind(this), data);
  };
}

export default UserStore;
