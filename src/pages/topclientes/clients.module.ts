import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientsPage } from './clients';
import { PiechartPage } from '../dashboardyear/piechart';
import {RoundProgressModule} from "angular-svg-round-progressbar";
import {SharedModule} from "../../components/shared-progress-bar-module/sharedmodules.module";

@NgModule({
  declarations: [
    ClientsPage,
    // PiechartPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientsPage)
    //IonicPageModule.forChild(PiechartPage),
    // RoundProgressModule
    , SharedModule
  ],
})
export class ClientsPageModule {}
