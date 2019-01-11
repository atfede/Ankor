import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientsPage } from './clients';
import { PiechartPage } from '../dashboardyear/piechart';
import {SharedModule} from "../../components/shared-progress-bar-module/sharedmodules.module";

@NgModule({
  declarations: [
    ClientsPage,
    // PiechartPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientsPage)
    //IonicPageModule.forChild(PiechartPage),
    , SharedModule
  ],
})
export class ClientsPageModule {}
