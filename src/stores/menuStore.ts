import { makeAutoObservable } from 'mobx';
import { categoriesType, ErrorResponse, sectionListType } from './storeTypes';
import { menuService } from '../api/api';
import { AxiosError } from 'axios';

export class MenuStore {
  error: ErrorResponse | null = null;
  //всё меню
  menu: categoriesType[] = [];
  //меню, левый сайдбар
  sectionMenuList: sectionListType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setMenuSectionList = (data: categoriesType) => {
    // let currentId = this.menu.find((n) => n.sectionId === data.sectionId);
    // if (!currentId) {
    //   this.menu = [...this.menu, data];
    // }
    this.menu = [...this.menu, data];
  };

  setSectionsMenu = (data: sectionListType[]) => {
    this.sectionMenuList = data;
  };

  setSectionMenu = (data: string) => {
    const foundSection = this.sectionMenuList.find(
      (item) => item.sectionName === data
    );
    if (!foundSection) {
      this.sendSectionMenuItem(data);
    } else {
      this.error = { message: 'Уже существует!' };
    }
  };

  setNewSectionMenu = (data: categoriesType) => {
    this.sectionMenuList = [
      ...this.sectionMenuList,
      { sectionId: data.sectionId, sectionName: data.sectionName },
    ];

    this.setMenuSectionList(data);
  };

  setError = (error: ErrorResponse) => {
    this.error = error;
  };

  fetchSectionsMenu = async (
    setSectionMenuList: (data: sectionListType[]) => void
  ) => {
    try {
      const response = await menuService.getMenuSections();
      setSectionMenuList(response.data.menuSections);
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;

      if (axiosError.response) {
        this.setError(axiosError.response.data);
      }
    }
  };

  sendSectionMenuItem = async (data: string) => {
    try {
      const response = await menuService.sendSectionMenu(data);
      this.setNewSectionMenu(response.data);
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;

      if (axiosError.response) {
        this.setError(axiosError.response.data);
      }
    }
  };

  fetchMenuSectionList = async (id: string) => {
    try {
      const response = await menuService.getMenuSectionList(id);
      //для моков
      this.setMenuSectionList(response.data);
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;

      if (axiosError.response) {
        this.setError(axiosError.response.data);
      }
    }
  };

  loadMenuSectionList = (id: string) => {
    let currentId = this.menu.find((n) => n.sectionId === id);

    if (!currentId) {
      this.fetchMenuSectionList(id);
    }
  };
}
