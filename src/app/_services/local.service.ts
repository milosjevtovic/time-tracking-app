import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalService {

  constructor() { }

  public set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public get(key: string) {
    return localStorage.getItem(key);
  }

  public exists(key: string) {
    return localStorage.getItem(key) !== null;
  }

  public delete(key: string) {
    return localStorage.removeItem(key);
  }

  public clear() {
    return localStorage.clear();
  }

}
