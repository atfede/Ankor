import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientPage } from './client';
import {NgxLineChartModule} from 'ngx-line-chart';

@NgModule({
  declarations: [
    ClientPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientPage),
    NgxLineChartModule
  ],
})

export class ClientPageModule {}
