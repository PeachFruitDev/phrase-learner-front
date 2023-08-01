import {Component} from '@angular/core';
import {LearningEntityService} from "../learning-entity.service";
import {LearningEntitiesToday} from "../entities";
import {lastValueFrom, map, Observable, takeWhile, timer} from "rxjs";

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent {
  stop: boolean = false;
  timer$: Observable<number> | undefined;
  timePassed: number = 0;
  timeNeeded: number = 0;
  timeRemainingSpinner: number = 0;
  today: LearningEntitiesToday | undefined;
  index: number | undefined;
  learningPassage: string | undefined;
  learningTerm: string | undefined;

  constructor(private service: LearningEntityService) {
  }

  ngOnInit() {
    this.service.getTodayLearningEntities().subscribe((today) => {
      this.today = today;
      this.startLearning();
    });
  }

  async startLearning() {
    if (this.today === undefined) {
      return;
    }
    this.timeNeeded = this.today.duration * this.today.learningEntities.length + this.today.delay * (this.today.learningEntities.length - 1);
    for (var i = 0; i < this.today.learningEntities.length; i++) {
      this.index = i;
      this.learningPassage = this.today.learningEntities[i].learningPassage
        .replace("\\\\", "<b>")
        .replace("\\\\", "</b>");
      this.learningTerm = this.today.learningEntities[i].learningTerm;
      this.startTimer(this.today.duration);
      await lastValueFrom(this.timer$ as Observable<number>)
      this.review();
      this.index = undefined;
      this.learningPassage = undefined;
      this.learningTerm = undefined;
      if (i === this.today.learningEntities.length - 1) {
        break;
      }
      this.startTimer(this.today.delay);
      await lastValueFrom(this.timer$ as Observable<number>)
    }
  }

  startTimer(countDown: number) {
    this.timer$ = timer(1000, 1000).pipe(
      map(n => {
        if (!this.stop) {
          this.timePassed++;
          this.timeRemainingSpinner = this.remainingTime();
          return countDown - n;
        } else {
          return 1;
        }
      }),
      takeWhile(n => n > 1),
    );
  }

  inverseTimer() {
    this.stop = !this.stop;
  }

  remainingTime() {
    return (this.timePassed / this.timeNeeded) * 100;
  }

  review() {
    if (this.index !== undefined &&
      this.today !== undefined &&
      this.today.learningEntities[this.index].id !== undefined) {
      this.service.review(this.today.learningEntities[this.index].id as string);
    }
  }
}
