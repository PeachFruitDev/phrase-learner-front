import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LearningEntitiesToday, LearningEntity} from "./entities";
import {Observable} from "rxjs";

const SERVER_URL = 'http://localhost:8080';
const ADD_API = '/add';
const TODAY_API = '/today';
const REVIEW_API = '/review';

@Injectable({
  providedIn: 'root'
})
export class LearningEntityService {

  constructor(private http: HttpClient) {
  }

  add(entity: LearningEntity): void {
    console.log(entity);
    this.http.post(SERVER_URL + ADD_API, entity).subscribe();
  }

  getTodayLearningEntities(): Observable<LearningEntitiesToday> {
    return this.http.get<LearningEntitiesToday>(SERVER_URL + TODAY_API);
  }

  delete(id: string): void {
    this.http.delete(SERVER_URL + '/' + id).subscribe();
  }

  review(id: string): void {
    this.http.put(SERVER_URL + '/' + id + REVIEW_API, {}).subscribe();
  }
}
