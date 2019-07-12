import { Routes } from '@angular/router';
// import { PhotosListComponent } from './photos-list/photos-list.component';
// import { PhotoThumbnailComponent } from './photo-thumbnail/photo-thumbnail.component';

export const appRoutes: Routes = [
    // { path: 'home', component: PhotosListComponent },
    // { path: 'home/:id', component: PhotoThumbnailComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' }
];
