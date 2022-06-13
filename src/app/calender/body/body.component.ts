import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
	selector: 'app-body',
	templateUrl: './body.component.html',
	styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, OnDestroy {

	weekDays: any = [];
	allDates: any = [];
	currentDate: Date = new Date();
	selectedDate: Date = new Date();
	subs: any;

	constructor(private appService: AppService) { }

	ngOnInit(): void {
		this.selectedDate = new Date();
		this.weekDays = [
			{
				name: 'Sun',
				value: 0,
			},
			{
				name: 'Mon',
				value: 1,
			},
			{
				name: 'Tue',
				value: 2,
			},
			{
				name: 'Wed',
				value: 3,
			},
			{
				name: 'Thu',
				value: 4,
			},
			{
				name: 'Fri',
				value: 5,
			},
			{
				name: 'Sat',
				value: 6,
			}
		];
		this.setDates(new Date());

		this.subs = this.appService.getData().subscribe((data: any) => {
			console.info('body: date change detected', data);
			if (data.date) {
				this.selectedDate = new Date(data.date);
				this.setDates(this.selectedDate);
			}
			if(data.eventUpdate) {
				this.setDates(this.selectedDate);
			}
		});
	}

	ngOnDestroy(): void {
		this.subs.unsubscribe();
	}

	setDates(date: any): any {
		const selectedDate: Date = new Date(date);
		const calendar: any[] = [];
		this.allDates = [];
		// get all year dates with other data
		// // mm-yy-dddd
		// const firstDayOfYear = new Date('01-01-' + selectedDate.getFullYear());
		// const firstDayOfNextYear = new Date('01-01-' + (selectedDate.getFullYear() + 1));
		// console.info('firstDayOfYear', firstDayOfYear);
		// console.info('firstDayOfNextYear', firstDayOfNextYear);
		// while (firstDayOfYear.getFullYear() < firstDayOfNextYear.getFullYear()) {

		// 	const date = {
		// 		day: firstDayOfYear.getDay(), // 0-6 = sun-sat
		// 		date: firstDayOfYear.getDate(), // 1-31
		// 		month: firstDayOfYear.getMonth(), // 0-11 = jan-dec
		// 		year: firstDayOfYear.getFullYear(), // 2022,2023...
		// 	};
		// 	calendar.push(date);
		// 	// console.info('date added', calendar);
		// 	firstDayOfYear.setDate(firstDayOfYear.getDate() + 1);
		// }

		const selectedMonth = selectedDate.getMonth();
		const dateSelected = selectedDate.getDate();

		let temp = new Date(selectedDate);
		let temp2 = new Date(temp);
		temp2.setMonth(temp2.getMonth() + 1);
		temp2.setDate(1);
		temp.setDate(1);

		let week = 1;
		// while (temp < temp2) {

		while ((temp.getFullYear() == temp2.getFullYear()) ? temp.getMonth() < temp2.getMonth() : (temp.getFullYear() < temp2.getFullYear()) ? temp < temp2 : false) {
			const dateData: any = {
				id: this.appService.getUniqueId(temp),
				day: temp.getDay(), // 0-6 = sun-sat
				date: temp.getDate(), // 1-31
				month: temp.getMonth(), // 0-11 = jan-dec
				year: temp.getFullYear(), // 2022,2023...
				actualDate: new Date(temp), // date
				week, // week of the month
				currentDate: (temp.getDate() == this.currentDate.getDate() && temp.getMonth() == this.currentDate.getMonth() && temp.getFullYear() == this.currentDate.getFullYear()),
				selected: (temp.getDate() == selectedDate.getDate() && temp.getMonth() == selectedDate.getMonth() && temp.getFullYear() == selectedDate.getFullYear())
			};
			dateData.events = this.appService.getEvents(dateData.id);
			dateData.hasEvents = dateData.events && dateData.events.length ?  true : false;
			if (dateData.day == 6) {
				week++;
			}

			calendar.push(dateData);
			temp.setDate(temp.getDate() + 1);
		}
		console.info('calendar set', calendar);

		// split by week
		let weekDates: any = [];
		calendar.forEach((e, i) => {
			if (weekDates[(e.week - 1)]) {
				weekDates[(e.week - 1)].push(e);
			} else {
				weekDates[(e.week - 1)] = [];
				weekDates[(e.week - 1)].push(e);
			}
		});
		console.info('weekDates', weekDates);


		weekDates.forEach((w: any[], i: number) => {

			this.weekDays.forEach((w1: any, j: any) => {

				const index: any = w.findIndex((d, k) => {
					return d.day === w1.value;
				});

				if (index === -1) {
					if (i === 0){
						w.unshift({
							day: w1.value,
							date: '-',
							invalid: true
						});
					}else{
						w.push({
							day: w1.value,
							date: '-',
							invalid: true
						});
					}
				}
			});
		});

		this.allDates = weekDates;
		console.info('allDates', this.allDates);

		// this.setEvents();
	}

	selectDate(data: any): any{
		console.info('selectDate called', data);
		if (!data.invalid){
			this.selectedDate = new Date(data.actualDate);
			// this.setDates(this.selectedDate);
			this.appService.setData({
				date: this.selectedDate
			});
		}
	}
}
