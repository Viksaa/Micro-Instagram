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
    options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

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
        return this.http.post<IPhoto>(this.url, photo, this.options)
            .pipe(catchError(this.handleError<IPhoto>('uploadPhoto')));
    }

    deletePhoto(id: number) {
        return this.http.delete(this.url + '/' + id, this.options)
            .pipe(catchError(this.handleError<IPhoto>('deletePhoto')));
    }

    editPhoto(id: number, photo: IPhoto) {
        return this.http.put(this.url + '/' + id, photo, this.options)
            .pipe(catchError(this.handleError<IPhoto>('editPhoto')));
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
