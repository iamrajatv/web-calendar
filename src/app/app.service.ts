import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AppService {

	allEvents: any = new Map();
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

	getUniqueId(date: any): any {
		let d = new Date(date);
		return d.getFullYear() + '' + (d.getMonth() + 1) + '' + d.getDate();
	}

	getUniqueEventId(): any {
		return Date.now();
	}

	getAllEvents(): any {
		return this.allEvents;
	}

	getEvents(key: any): any {
		let data = this.allEvents.get(key);
		return data && data.length ? data: [];
	}

	setEvents(data: any): boolean {
		if(data && data.size){
			this.allEvents = data
			this.setData({eventUpdate : true})
			return true;
		}
		return false;
	}

}
