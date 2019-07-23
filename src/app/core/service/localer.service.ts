import { Injectable } from '@angular/core';

@Injectable()
export class LocalerService {

  constructor() { }
  saveLocalStorage(key: string, value: any) {
    if (typeof(value) === 'object') {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }
  getLocalStorage(key: string): string {
    return localStorage.getItem(key);
  }
  saveSessionStorage(key: string, value: any) {
    if (typeof(value) === 'object') {
      value = JSON.stringify(value);
    }
    sessionStorage.setItem(key, value);
  }
  getSessionStorage(key: string): string {
    return sessionStorage.getItem(key);
  }
}
