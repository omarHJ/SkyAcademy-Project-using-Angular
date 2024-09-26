import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { VacationRequestsComponent } from './vacation-requests/vacation-requests.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'vacations-requests', component: VacationRequestsComponent }
];