import { Routes,RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';

const routes : Routes = [
    {path:'',component: HomeComponent},
    {path:'category/:id',component: CategoryComponent},
    {path:'category/:id',component: CategoryComponent},
    
];

export const routing = RouterModule.forRoot(routes);