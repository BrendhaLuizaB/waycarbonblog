import { Routes } from '@angular/router';
import { HomeComponent } from '../../projects/waycarbon/src/app/home/home.component';
import { UserIconComponent } from '../../projects/waycarbon-ds/src/app/user-icon/user-icon.component';

export const routes: Routes = [
   { path: "",
    component: HomeComponent,
},
{
    path: "", 
    component: UserIconComponent
}

];
