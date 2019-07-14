import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PhotosService } from 'src/app/shared/photos.service';
import { IPhoto } from 'src/app/shared/photo.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-edit-photo',
    templateUrl: './edit-photo.component.html',
    styleUrls: ['./edit-photo.component.css']
})
export class EditPhotoComponent implements OnInit {
    editForm: FormGroup;
    albumId: FormControl;
    id: FormControl;
    title: FormControl;
    url: FormControl;
    thumbnailUrl: FormControl;
    currentPhoto: IPhoto;
    routeId: number;

    constructor(private photosService: PhotosService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.routeId = this.route.snapshot.params['id'];
        this.photosService.getPhoto(this.routeId).subscribe(p => {
            this.albumId = new FormControl(p.albumId, Validators.required);
            this.id = new FormControl(p.id, Validators.required);
            this.title = new FormControl(p.title, Validators.required);
            this.url = new FormControl(p.url, Validators.required);
            this.thumbnailUrl = new FormControl(p.thumbnailUrl, Validators.required);

            this.editForm = new FormGroup({
                albumId: this.albumId,
                id: this.id,
                title: this.title,
                url: this.url,
                thumbnailUrl: this.thumbnailUrl
            });
        });
    }

    editPhoto(data: IPhoto) {
        this.photosService.editPhoto(this.routeId, data).subscribe(() => {
            window.alert('Form Edited Successfully');
            this.router.navigate(['/photos']);
        });
    }

}
