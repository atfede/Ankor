import { NgModule } from '@angular/core';
import { SearchFilterPipe } from './searchfilter/searchfilter';
import { MyPipe } from './myPipe/myPipe';
@NgModule({
	declarations: [SearchFilterPipe,
    MyPipe],
	imports: [],
	exports: [SearchFilterPipe,
    MyPipe]
})
export class PipesModule {}
