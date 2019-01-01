import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {MetasComponent} from "./metas";
import {SharedModule} from "../../components/shared-progress-bar-module/sharedmodules.module";
// import {ProgressBarComponent} from "../../components/progress-bar/progress-bar";

@NgModule({
  declarations: [
    MetasComponent
    //ProgressBarComponent

  ],
  imports: [
    IonicPageModule.forChild(MetasComponent),
    SharedModule
  ],
})
export class MetasComponentModule {}
