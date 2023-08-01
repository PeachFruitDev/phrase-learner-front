import {Component} from '@angular/core';
import {LearningEntityService} from "../learning-entity.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private service: LearningEntityService) {
  }
}
