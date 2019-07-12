import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../shared/photo.model';
import { PhotosService } from '../shared/photos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-photo-details',
    templateUrl: './photo-details.component.html',
    styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {
    photo: IPhoto;

    constructor(private photosService: PhotosService, private route: ActivatedRoute) { }

    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        this.photosService.getPhoto(id).subscribe(p => {
            this.photo = p;
        });
    }

}
