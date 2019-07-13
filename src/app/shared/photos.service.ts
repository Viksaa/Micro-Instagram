import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

    uploadPhoto(photo) {
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post<IPhoto>(this.url, photo, options)
            .pipe(catchError(this.handleError<IPhoto>('uploadPhoto')));
    }

    deletePhoto(id: number) {
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.delete(this.url + '/' + id, options)
            .pipe(catchError(this.handleError<IPhoto>('deletePhoto')));
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
