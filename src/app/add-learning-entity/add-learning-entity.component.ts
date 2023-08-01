import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LearningEntityService} from "../learning-entity.service";
import {LearningEntity} from "../entities";

@Component({
  selector: 'app-add-learning-entity',
  templateUrl: './add-learning-entity.component.html',
  styleUrls: ['./add-learning-entity.component.css']
})
export class AddLearningEntityComponent {
  learningEntityForm = new FormGroup({
    learningTerm: new FormControl('', Validators.required),
    learningPassage: new FormControl('', Validators.required),
  });

  constructor(private learningEntityService: LearningEntityService) {
  }

  add(): void {
    if (!this.learningEntityForm.valid) {
      return;
    }
    this.learningEntityService.add(this.learningEntityForm.value as LearningEntity);
    this.learningEntityForm.reset();
  }
}
