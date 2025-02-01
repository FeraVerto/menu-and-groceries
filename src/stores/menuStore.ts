import { makeAutoObservable } from 'mobx';
import { categoriesType, sectionListType } from './storeTypes';
import { menuService } from '../api/api';

export class MenuStore {
  error: string = '';
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
      this.error = 'Уже существует!';
      //вывести сообщение, что такая секция меню уже существует
    }
  };

  setNewSectionMenu = (data: categoriesType) => {
    this.sectionMenuList = [
      ...this.sectionMenuList,
      { sectionId: data.sectionId, sectionName: data.sectionName },
    ];

    this.setMenuSectionList(data);
  };

  fetchSectionsMenu = async (
    setSectionMenuList: (data: sectionListType[]) => void
  ) => {
    try {
      const response = await menuService.getMenuSections();
      setSectionMenuList(response.data.menuSections);
    } catch {}
  };

  sendSectionMenuItem = async (data: string) => {
    console.log('response', data);
    try {
      const response = await menuService.sendSectionMenu(data);
      this.setNewSectionMenu(response.data);
    } catch {}
  };

  fetchMenuSectionList = async (id: string) => {
    try {
      const response = await menuService.getMenuSectionList(id);
      //для моков
      this.setMenuSectionList(response.data);
    } catch (error) {}
  };

  loadMenuSectionList = (id: string) => {
    let currentId = this.menu.find((n) => n.sectionId === id);

    if (!currentId) {
      this.fetchMenuSectionList(id);
    }
  };

  setError = (error: string) => {
    this.error = error;
  };
}
