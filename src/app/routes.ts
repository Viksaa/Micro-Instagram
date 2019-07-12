import { Routes } from '@angular/router';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';

export const appRoutes: Routes = [
    { path: 'photos', component: PhotosListComponent },
    { path: 'photos/:id', component: PhotoDetailsComponent },
    { path: '', pathMatch: 'full', redirectTo: '/photos' }
];
