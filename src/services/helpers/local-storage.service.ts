import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    constructor() { }

    set(key: string, object: any) {
        localStorage.setItem(key, JSON.stringify(object));
    }

    get(key: string) {
        const obj = localStorage.getItem(key);
        return JSON.parse(obj);
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }
}
