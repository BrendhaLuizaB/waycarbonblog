import { Routes } from '@angular/router';
import { UserIconComponent } from '../../projects/waycarbon-ds/src/app/user-icon/user-icon.component';
import { HomeComponent } from '../../projects/waycarbon/src/app/pages/home/home.component';

export const routes: Routes = [
   { path: "",
    component: HomeComponent,
},
{
    path: "", 
    component: UserIconComponent
}
];
