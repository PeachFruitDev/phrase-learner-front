import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdminComponent} from './admin/admin.component';
import {LearningComponent} from './learning/learning.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HomePageComponent} from './home-page/home-page.component';
import {MatListModule} from "@angular/material/list";
import {AddLearningEntityComponent} from './add-learning-entity/add-learning-entity.component';
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

const appRoutes = [
  {path: 'learning', component: LearningComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'add', component: AddLearningEntityComponent},
  {path: '**', component: HomePageComponent},
  {path: '', component: HomePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LearningComponent,
    HomePageComponent,
    AddLearningEntityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
