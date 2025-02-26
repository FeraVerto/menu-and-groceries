import { makeAutoObservable } from 'mobx';
import { sectionsType, ErrorResponse } from './storeTypes';
import { menuService } from '../api/api';
import { AxiosError } from 'axios';
import { helper } from '../utils/helper';

export class MenuStore {
  error: ErrorResponse | null = null;
  //всё меню
  menu: sectionsType[] = [];
  //меню, левый сайдбар
  // sectionMenuList: sectionsType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setMenuSectionList = (data: sectionsType) => {
    let currentId = this.menu.find((n) => n.sectionId === data.sectionId);
    if (!currentId) {
      this.menu = [...this.menu, data];
    }
    this.menu = [...this.menu, data];
  };

  setSectionsMenu = (data: sectionsType[]) => {
    this.menu = data;
  };

  setNewSectionMenu = (data: sectionsType) => {
    this.menu = [...this.menu, data];
  };

  setError = (error: ErrorResponse) => {
    this.error = error;
  };

  //на получение меню
  fetchSectionsMenu = async () => {
    try {
      const response = await menuService.getMenuSections();
      this.setSectionsMenu(response.data);
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;

      if (axiosError.response) {
        this.setError(axiosError.response.data);
      }
    }
  };

  //отправляем новое
  sendSectionMenuItem = async (data: string) => {
    try {
      const response = await menuService.sendSectionMenu({
        sectionName: data,
      });
      this.setNewSectionMenu(response.data);
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;

      if (axiosError.response) {
        this.setError(axiosError.response.data);
      }
    }
  };

  //две эти функции работают на то, чтобы получить блюда только от конкретной секции
  //получаем весь список - заменить на menu
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

  //загружаем только одну секцию
  loadMenuSectionList = (id: string) => {
    let currentId = this.menu.find((n) => n.sectionId === id);

    if (!currentId) {
      this.fetchMenuSectionList(id);
    }
  };
}
