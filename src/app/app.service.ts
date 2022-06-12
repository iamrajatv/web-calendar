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

	setData(data: any): any {
		this.dataChange.next(data);
	}

	getValidDate(date: any): any {
		let d = new Date(date);
		return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
	}
}
