import { Injectable } from '@angular/core';


const STORAGE_KEY = 'lesson-app:lastSessionID';
interface StoredInfo {
  lastLessonId?: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  private _lastLessonId: number | null = null;

  get lastLessonId(): number | null {
    return this._lastLessonId;
  }

  set lastLessonId(value: number| null ) {
    this._lastLessonId = value;
    this.saveInfoToLocalStorage();
  }


  constructor() {
    const storedInfo = this.loadInfoFromLocalStorage();
    this.lastLessonId = storedInfo.lastLessonId || null;
  }




  private saveInfoToLocalStorage() {
    const storedInfo: StoredInfo = {lastLessonId: this.lastLessonId};
    let json = JSON.stringify(storedInfo);
    window.localStorage.setItem(STORAGE_KEY, json);
  }

  private loadInfoFromLocalStorage() : StoredInfo {
    const storedJson = window.localStorage.getItem(STORAGE_KEY);
    let res = (storedJson ? JSON.parse(storedJson) : {lastLessonId : null});
    console.log('loadInfoFromLocalStorage'+STORAGE_KEY, res);
    return res;
  }
}
