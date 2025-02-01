import { makeAutoObservable } from 'mobx';
import { userDataResponse, userType, ErrorResponse } from './storeTypes';
import { AxiosError } from 'axios';
import { authService } from '../api/api';

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
    this.checkAuthService();
  }

  setError = (error: ErrorResponse) => {
    this.error = error;
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

  checkAuthService = async () => {
    try {
      const response = await authService.checkAuth();
      if (response.status === 200) {
        this.userData(response.data);
      }
    } catch (e) {}
  };

  userLogin = async (params: { username: string; password: string }) => {
    try {
      const response = await authService.login(params);
      if (response.status === 200) {
        this.userData(response.data);
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;

      if (axiosError.response) {
        this.setError(axiosError.response.data);
      }
    }
  };

  userLogout = async () => {
    try {
      const response = await authService.logout();
      if (response.status === 200) {
        this.userLogoutData();
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;

      if (axiosError.response) {
        this.setError(axiosError.response.data);
      }
    }
  };

  userRegister = async (params: { username: string; password: string }) => {
    try {
      const response = await authService.register(params);
      if (response.data.isUserCreated) {
        this.toggleIsRegister(true);
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;

      if (axiosError.response) {
        this.setError(axiosError.response.data);
      }
    }
  };
}

export default UserStore;
