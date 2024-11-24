import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';
import {DefaultService} from '../generated';


export interface LearningPackageDTO {
  id: number;
  name: string;
  description: string;

}

export class LearningPackageModel{
  id: number;
  name: string;
  description: string



  constructor(src:LearningPackageDTO) {
    this.id= src.id||-1;
    this.name = src.name|| "";
    this.description = src.description || "";
  }

}

@Injectable({
  providedIn: 'root'
})
export class LearningPackageService {
  private id: number = -1;
  private name: string = '';
  private description: string ='';

  private readonly httpClient = inject(HttpClient);
  private readonly learningPackageApiService = inject(DefaultService);

  constructor() {


  }

  setLearningPackageDTO(src: LearningPackageDTO) : void {
    this.id = src.id;
    this.name = src.name;
    this.description = src.description;
  }


  getLearningPackageDTO() : Observable<LearningPackageDTO[]>{
    return this.learningPackageApiService.apiPackageGet();
  }



}






