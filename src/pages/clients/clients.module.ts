import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientsPage } from './clients';
import { PiechartPage } from '../piechart/piechart';
import {RoundProgressModule} from "angular-svg-round-progressbar";

@NgModule({
  declarations: [
    ClientsPage,
    // PiechartPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientsPage),
    //IonicPageModule.forChild(PiechartPage),
    // RoundProgressModule
  ],
})
export class ClientsPageModule {}
