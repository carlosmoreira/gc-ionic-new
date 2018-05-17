import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class HttpServiceProvider {
    private apiUrl: string;

    constructor(public http: HttpClient) {
        console.log('Hello HttpServiceProvider Provider');
        this.apiUrl = "http://www.apiUrl.com";
    }

    /**
     * Send Post Request
     * @param {string} url
     * @param {Object} data
     * @returns {Observable<Object>}
     */
    public post(url: string, data: Object) {
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
