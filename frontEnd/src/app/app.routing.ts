import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { GeneralComponent } from './components/general/general.component';
import { ParroquiaDesignComponent } from './components/parroquia-design/parroquia-design.component';

export const AppRoutes: Routes = [

    
    { path: '', component: LoginComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [{
            path: 'profile',
            component: ProfileComponent
        }, {
            path: 'general',
            component: GeneralComponent
        }, {
            path: 'parroquiaDesign',
            component: ParroquiaDesignComponent,
            data : {some_data : 'some value'}
        }]
    },
    { path: 'login', component: LoginComponent }
];