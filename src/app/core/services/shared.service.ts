import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // Varaibles

  constructor() {}

  get DrawerState() {
    return JSON.parse(localStorage.getItem('drawerState') || 'true');
  }

  setDrawerState(value: boolean) {
    localStorage.setItem('drawerState', JSON.stringify(value));
  }
}
