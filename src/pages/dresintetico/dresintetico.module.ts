import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {SharedModule} from "../../components/shared-progress-bar-module/sharedmodules.module";
import {DresinteticoComponent} from "./dresintetico";
// import {ProgressBarComponent} from "../../components/progress-bar/progress-bar";

@NgModule({
  declarations: [
    DresinteticoComponent

  ],
  imports: [
    IonicPageModule.forChild(DresinteticoComponent),
    SharedModule
  ],
})
export class DresinteticoComponentModule {}
