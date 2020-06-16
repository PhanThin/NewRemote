import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({

	providedIn: 'root'
})

export class ImageService {

	private readonly API_URL = 'https://api.unsplash.com/search/photos/?query=London&client_id=cdgd-g1GoEAi1uaDQYGJDnLfddqFFcKBih_1atunHKI';

	constructor( private http: HttpClient ) { }

	getData(count = 10) {
		return this.http.get(this.API_URL).pipe(map(respone => respone.filter((post, i) => i < count)));
	}
}
