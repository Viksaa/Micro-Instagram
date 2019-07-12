import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { IPhoto } from './photo.model';

@Injectable({
    providedIn: 'root'
})
export class PhotosService {

    url = 'http://jsonplaceholder.typicode.com/photos';

    constructor(private http: HttpClient) { }

    getPhotos(): Observable<IPhoto[]> {
        return this.http.get<IPhoto[]>(this.url)
            .pipe(catchError(this.handleError<IPhoto[]>('getPhotos', [])));
    }

    getPhoto(id: number): Observable<IPhoto> {
        return this.http.get<IPhoto>(this.url + '/' + id)
            .pipe(catchError(this.handleError<IPhoto>('getPhoto')));
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
