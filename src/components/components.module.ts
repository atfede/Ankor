import {NgModule} from '@angular/core';
import {MetasComponent} from '../pages/metas/metas';
// import { DresinteticoComponent } from '../pages/dresintetico/dresintetico';
import {SimuladoresComponent} from '../pages/simuladores/simuladores';
import {ProgressBarComponent} from './progress-bar/progress-bar';
// import { SharedProgressBarModuleComponent } from './shared-progress-bar-module/shared-progress-bar-module';
@NgModule({
    declarations: [
        MetasComponent,
        // DresinteticoComponent,
        SimuladoresComponent],
    imports: [],
    exports: [MetasComponent,
        // DresinteticoComponent,
        SimuladoresComponent]
})
export class ComponentsModule {
}
