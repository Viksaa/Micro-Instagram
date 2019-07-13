import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from './routes';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotoThumbnailComponent } from './photo-thumbnail/photo-thumbnail.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        PhotosListComponent,
        PhotoThumbnailComponent,
        PhotoDetailsComponent,
        UploadPhotoComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        {
            provide: 'canDeactivateUploadPhoto',
            useValue: checkDirty
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirty(component: UploadPhotoComponent) {
    if (component.isDirty)
        return window.confirm('Do you really want to cancel your uploading ?');
    return true;
}
