import { Routes } from '@angular/router';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotoThumbnailComponent } from './photo-thumbnail/photo-thumbnail.component';

export const appRoutes: Routes = [
    { path: 'photos', component: PhotosListComponent },
    { path: 'photos/:id', component: PhotoThumbnailComponent },
    { path: '', pathMatch: 'full', redirectTo: '/photos' }
];
