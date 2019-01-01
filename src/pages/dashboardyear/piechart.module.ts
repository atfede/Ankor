import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PiechartPage } from './piechart';

import {RoundProgressModule} from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    PiechartPage,
  ],
  imports: [
    IonicPageModule.forChild(PiechartPage),
    RoundProgressModule
  ],
})

export class PiechartPageModule {}
