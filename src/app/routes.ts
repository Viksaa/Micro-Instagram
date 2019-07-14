import { Routes } from '@angular/router';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { EditPhotoComponent } from './photo-details/edit-photo/edit-photo.component';

export const appRoutes: Routes = [
    { path: 'photos/new', component: UploadPhotoComponent, canDeactivate: ['canDeactivateUploadPhoto'] },
    { path: 'photos', component: PhotosListComponent },
    { path: 'photos/:id', component: PhotoDetailsComponent },
    { path: 'photos/edit/:id', component: EditPhotoComponent },
    { path: '', pathMatch: 'full', redirectTo: '/photos' }
];
