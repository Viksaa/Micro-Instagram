import { Component, OnInit, Input } from '@angular/core';
import { IPhoto } from '../shared/photo.model';
import { PhotosService } from '../shared/photos.service';

@Component({
    selector: 'app-photos-list',
    templateUrl: './photos-list.component.html',
    styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

    @Input() photos: IPhoto[];

    constructor(private photosService: PhotosService) { }

    ngOnInit() {
        this.photosService.getPhotos().subscribe(p => {
            this.photos = p;
        });
    }

}
