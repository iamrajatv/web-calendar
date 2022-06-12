import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-events',
	templateUrl: './events.component.html',
	styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

	allEvents: any[] = [];
	constructor() { }

	ngOnInit(): void {
		this.allEvents = [
			{
				time: '10:30AM',
				title: 'Event 1',
				description: 'Event desc',
			},
			{
				time: '10:30AM',
				title: 'Event 2',
				description: 'Event desc',
			},
			{
				time: '10:30AM',
				title: 'Event 3',
				description: 'Event desc',
			}
		];
	}

	getUniqueId(): any {
		return Date.now();
	}

	getEvents(): any {
		return this.allEvents;
	}

	setEvents(events: any[]): any {
		if (Array.isArray(events)) {
			this.allEvents = events;
			console.log('All events set!');
		}
	}

	addEvent(event: any): any {
		if (event) {
			event.id = this.getUniqueId();
			this.allEvents.push(event);
			console.log('Event added!');
			this.printTotalEvents();
		}
	}

	updateEvent(event: any): any {
		if (event) {
			let eventExist = this.allEvents.filter((e, i) => {
				return e.id === event.id;
			})[0];

			if (eventExist) {
				eventExist = event;
				console.log('Event updated!');
			}
		}
	}

	deleteEvent(event: any): any {
		if (event) {
			const eventIndex: any = this.allEvents.findIndex((e, i) => {
				return e.id === event.id;
			});

			if (eventIndex !== undefined) {
				this.allEvents.splice(eventIndex, 1);
				console.log('Event deleted!');
				this.printTotalEvents();
			}
		}
	}

	printTotalEvents(): any{
		console.log('Total Events', this.allEvents.length);
	}

}
