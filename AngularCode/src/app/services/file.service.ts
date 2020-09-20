import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class FileService {

	public url:string;

	constructor(private _http: HttpClient) 
	{
		this.url = Global.url;
	}

	getFile(fileName)
	{
		return this._http.get(this.url+'get-file'+fileName,{responseType: "blob",headers: new HttpHeaders().append("Content-Type", "application/json")});
 	}
}