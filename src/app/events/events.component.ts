import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
	selector: 'app-events',
	templateUrl: './events.component.html',
	styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

	selectedDate: any = new Date();
	allEvents: Map<any, any> = new Map();
	selectedDateEvents: any[] = [];
	inputEvent: any = {};
	subs: any;

	constructor(private appService: AppService) { }

	ngOnInit(): void {
		this.subs = this.appService.getData().subscribe((data: any) => {
			console.info('events: date change detected', data);
			if (data.date) {
				this.selectedDate = new Date(data.date);
				this.setDateEvents(this.selectedDate);
				// console.info('selectedDate', this.selectedDate);
			} else {
				console.error('Invalid date passed!');
			}
		});
	}

	getUniqueId(date: any): any {
		let d = new Date(date);
		return d.getFullYear() + '' + (d.getMonth() + 1) + '' + d.getDate();
	}

	getUniqueEventId(): any {
		return Date.now();
	}
	// getEvents(): any {
	// 	return this.selectedDateEvents;
	// }

	setEvents(events: any[]): any {
		if (Array.isArray(events)) {
			this.selectedDateEvents = events;
			console.info('All events set!');
		}else{
			this.selectedDateEvents = [];
		}
	}

	addEvent(event: any): any {
		if (event && event.title) {
			event.id = this.getUniqueEventId();
			this.selectedDateEvents.push(event);
			console.info('Event added!');

			this.allEvents.set(this.getUniqueId(this.selectedDate), this.selectedDateEvents);
			this.inputEvent = {};
			this.printEvents();
		}
	}

	editEvent(event: any, index: number): any{
		if (event && event.id) {
			event.edit = true;
		}
	}
	cancelEdit(event: any, index: number): any{
		if (event && event.id) {
			event.edit = false;
		}
	}

	updateEvent(event: any, index: number): any {
		if (event && event.id) {
			event.edit = false;
			console.info('Event updated!');
			this.allEvents.set(this.getUniqueId(this.selectedDate), this.selectedDateEvents);
			this.inputEvent = {};
			this.printEvents();
		}
	}

	deleteEvent(event: any, index: number): any {
		if (event) {
			const eventIndex: any = this.selectedDateEvents.findIndex((e, i) => {
				return e.id === event.id;
			});

			if (eventIndex !== undefined) {
				this.selectedDateEvents.splice(eventIndex, 1);
				console.info('Event deleted!');

				this.allEvents.set(this.getUniqueId(this.selectedDate), this.selectedDateEvents);
				this.inputEvent = {};
				this.printEvents();
			}
		}
	}

	printEvents(): any {
		console.info('Total Events', this.allEvents);
		console.info('Selected Events', this.selectedDateEvents);
		// api call to save all added or modified events
	}

	setDateEvents(date: any): any {
		let uId = this.getUniqueId(date);
		let eventExist = this.allEvents.get(uId);
		if (eventExist && eventExist.length) {
			this.setEvents(eventExist);
		}else{
			this.selectedDateEvents = [];
		}
	}

}
