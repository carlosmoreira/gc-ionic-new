import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpServiceProvider {
    private apiUrl: string;

    constructor(public http: HttpClient) { 
        this.apiUrl = "http://backend-giftcash-ca.carlosdevelops.com/api/";
        console.log('Using API:' + this.apiUrl);
    } 

    public post(url: string, data: Object, headers = null) {
        if (headers)
            return this.http.post(this.apiUrl + url, data, { headers: headers });
        else
            return this.http.post(this.apiUrl + url, data);
    }

    /**
     * Send Get Request
     * @param url
     * @returns {Observable<Object>}
     */
    public get(url) {
        return this.http.get(this.apiUrl + url);
    }

}
