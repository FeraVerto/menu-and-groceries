import { makeAutoObservable } from 'mobx';
import { categoriesType, sectionListType } from './storeTypes';
import {
  fetchMenuSectionList,
  fetchSectionsMenu,
  sendSectionMenuItem,
} from './service';

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

  setNewSectionMenu = (data: categoriesType) => {
    this.sectionMenuList = [
      ...this.sectionMenuList,
      { sectionId: data.sectionId, sectionName: data.sectionName },
    ];

    this.setMenuSectionList(data);
  };

  setSectionMenu = (data: string) => {
    const foundSection = this.sectionMenuList.find(
      (item) => item.sectionName === data
    );
    if (!foundSection) {
      sendSectionMenuItem(this.setNewSectionMenu.bind(this), data);
    } else {
      this.error = 'Уже существует!';
      //вывести сообщение, что такая секция меню уже существует
    }
  };

  loadSectionMenu = () => {
    fetchSectionsMenu(this.setSectionsMenu.bind(this));
  };

  loadMenuSectionList = (id: string) => {
    let currentId = this.menu.find((n) => n.sectionId === id);

    if (!currentId) {
      fetchMenuSectionList(this.setMenuSectionList.bind(this), id);
    }
  };

  setError = (error: string) => {
    this.error = error;
  };
}
