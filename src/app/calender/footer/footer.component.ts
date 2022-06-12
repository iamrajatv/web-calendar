import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppConfig } from 'src/app/app.config';
import { AppService } from 'src/app/app.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

	years: any[] = [];
	months: any[] = [];
	selectedDate: Date = new Date();
	selectedYear: any;
	selectedMonth: any;
	// @Input() dateSelected: any;
	// @Output() dateChange: EventEmitter<any> = new EventEmitter();
	subs: any;

	constructor(private appService: AppService) { }

	ngOnInit(): void {
		this.selectedDate = new Date();
		this.selectedYear = this.selectedDate.getFullYear();
		this.selectedMonth = this.selectedDate.getMonth();
		console.log('selectedYear', this.selectedYear);
		console.log('selectedMonth', this.selectedMonth);
		let firstYear = this.selectedDate.getFullYear() - AppConfig.maxData;
		let lastYear = this.selectedDate.getFullYear() + AppConfig.maxData;
		for (let i = firstYear; i <= lastYear; i++) {
			this.years.push({
				name: i,
				value: i
			});
		}

		this.months = [
			{
				name: 'Jan',
				value: 0
			},
			{
				name: 'Feb',
				value: 1
			},
			{
				name: 'Mar',
				value: 2
			},
			{
				name: 'Apr',
				value: 3
			},
			{
				name: 'May',
				value: 4
			},
			{
				name: 'Jun',
				value: 5
			},
			{
				name: 'Jul',
				value: 6
			},
			{
				name: 'Aug',
				value: 7
			},
			{
				name: 'Sep',
				value: 8
			},
			{
				name: 'Oct',
				value: 9
			},
			{
				name: 'Nov',
				value: 10
			},
			{
				name: 'Dec',
				value: 11
			},
		];

		this.subs = this.appService.getData().subscribe((data: any) => {
			console.log('footer: date change detected', data);
			if (data.date) {
				this.selectedDate = new Date(data.date);
				this.selectedYear = this.selectedDate.getFullYear();
				this.selectedMonth = this.selectedDate.getMonth();
			} else {
				console.error('Invalid date passed!');
			}
		});
	}

	ngOnDestroy(): void {
		this.subs.unsubscribe();
	}

	selectToday(): any{
		console.log('selectToday', this.selectedDate);
		this.selectedDate = new Date();
		this.appService.setData({
			date: this.selectedDate
		});
	}

	selectYear(): any {
		console.log('selected year', this.selectedYear);
		this.selectedDate.setFullYear(this.selectedYear);
		this.appService.setData({
			date: this.selectedDate
		});
	}

	selectMonth(): any {
		console.log('selected month', this.selectedMonth);
		this.selectedDate.setMonth(this.selectedMonth);
		this.appService.setData({
			date: this.selectedDate
		});
	}
}
