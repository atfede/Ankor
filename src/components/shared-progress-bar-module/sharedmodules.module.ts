import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProgressBarComponent } from '../progress-bar/progress-bar';
import {SearchFilterPipe} from "../../pipes/searchfilter/searchfilter";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProgressBarComponent,
    SearchFilterPipe
  ],
  exports: [
    ProgressBarComponent,
    SearchFilterPipe
  ]
})
export class SharedModule {

}
