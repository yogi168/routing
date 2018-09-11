import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModemComponent } from './modem/modem.component';
import { SmsComponent } from './sms/sms.component';
import { HomeComponent } from './home/home.component';

const routes : Routes = [
    {path:'',component: HomeComponent},
    {path:'sms',component: SmsComponent},
    {path:'modem',component: ModemComponent},
    
];

export const routing = RouterModule.forRoot(routes);