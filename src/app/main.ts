import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import 'rxjs/operator/take';
platformBrowserDynamic().bootstrapModule(AppModule);
