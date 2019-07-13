import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../shared/photo.model';
import { PhotosService } from '../shared/photos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-photo-details',
    templateUrl: './photo-details.component.html',
    styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {
    photo: IPhoto;

    constructor(private photosService: PhotosService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        this.photosService.getPhoto(id).subscribe(p => {
            this.photo = p;
        });
    }

    deletePhoto(id: number) {
        if (window.confirm('Do you really want to delete this photo ?')) {
            this.photosService.deletePhoto(id).subscribe(p => {
                window.alert('Photo with id ' + id + ' deleted');
                this.router.navigate(['/photos']);
            });
        }
    }

}
