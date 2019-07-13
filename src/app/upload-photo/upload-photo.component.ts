import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../shared/photos.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-upload-photo',
    templateUrl: './upload-photo.component.html',
    styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent implements OnInit {

    photoForm;
    isDirty = true;

    constructor(private photosService: PhotosService, private router: Router) { }

    ngOnInit() { }

    uploadPhoto(photo) {
        this.photosService.uploadPhoto(photo).subscribe(() => {
            this.isDirty = false;
            this.router.navigate(['/photos']);
        });
    }

    cancel() {
        this.router.navigate(['/photos']);
    }

}
