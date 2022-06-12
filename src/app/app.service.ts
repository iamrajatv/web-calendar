import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AppService {

	dataChange = new BehaviorSubject({ date: new Date() });
	private data = this.dataChange.asObservable();

	constructor() { }

	getData(): Observable<any> {
		return this.data;
	}

	setData(data: any): boolean {
		this.dataChange.next(data);
		return true;
	}
}
