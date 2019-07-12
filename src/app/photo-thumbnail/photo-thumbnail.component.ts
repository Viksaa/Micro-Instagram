import { Component, OnInit, Input } from '@angular/core';
import { IPhoto } from '../shared/photo.model';

@Component({
    selector: 'app-photo-thumbnail',
    templateUrl: './photo-thumbnail.component.html',
    styleUrls: ['./photo-thumbnail.component.css']
})
export class PhotoThumbnailComponent implements OnInit {
    @Input() photo: IPhoto;

    constructor() { }

    ngOnInit() {
    }

}
