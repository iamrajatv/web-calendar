import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-body',
	templateUrl: './body.component.html',
	styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

	weekDays: any = [];
	allDates: any = [];

	constructor() { }

	ngOnInit(): void {
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
		this.setDates();
	}

	setDates(): any {
		const currentDate: Date = new Date();
		const calendar: any[] = [];

		// get all year dates with other data
		// // mm-yy-dddd
		// const firstDayOfYear = new Date('01-01-' + currentDate.getFullYear());
		// const firstDayOfNextYear = new Date('01-01-' + (currentDate.getFullYear() + 1));
		// console.log('firstDayOfYear', firstDayOfYear);
		// console.log('firstDayOfNextYear', firstDayOfNextYear);
		// while (firstDayOfYear.getFullYear() < firstDayOfNextYear.getFullYear()) {

		// 	const date = {
		// 		day: firstDayOfYear.getDay(), // 0-6 = sun-sat
		// 		date: firstDayOfYear.getDate(), // 1-31
		// 		month: firstDayOfYear.getMonth(), // 0-11 = jan-dec
		// 		year: firstDayOfYear.getFullYear(), // 2022,2023...
		// 	};
		// 	calendar.push(date);
		// 	// console.log('date added', calendar);
		// 	firstDayOfYear.setDate(firstDayOfYear.getDate() + 1);
		// }

		const selectedMonth = currentDate.getMonth();
		const selectedDate = currentDate.getDate();

		let temp = new Date();
		temp.setDate(1);

		let week = 1;
		while (temp.getMonth() < (selectedMonth + 1)) {
			const dateData = {
				day: temp.getDay(), // 0-6 = sun-sat
				date: temp.getDate(), // 1-31
				month: temp.getMonth(), // 0-11 = jan-dec
				year: temp.getFullYear(), // 2022,2023...
				data: temp, // date
				week, // week of the month
			};
			if (dateData.day == 6) {
				week++;
			}

			calendar.push(dateData);
			temp.setDate(temp.getDate() + 1);
		}
		console.log('calendar set', calendar);
		// this.allDates = calendar;

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
		console.log('weekDates', weekDates);


		weekDates.forEach((w: any[], i: number) => {

			this.weekDays.forEach((w1: any, j: any) => {

				const index: any = w.findIndex((d, j) => {
					return d.day === w1.value;
				});

				if (index === -1) {
					if (w1.value <= 3){
						w.unshift({
							day: w1.value,
							date: '-'
						});
					}else{
						w.push({
							day: w1.value,
							date: '-'
						});
					}
				}
			});
		});

		this.allDates = weekDates;
		console.log('allDates', this.allDates);
	}

}
