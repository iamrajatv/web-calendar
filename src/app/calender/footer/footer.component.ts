import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { environment } from 'src/environments/environment';

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
		console.info('selectedYear', this.selectedYear);
		console.info('selectedMonth', this.selectedMonth);
		let firstYear = this.selectedDate.getFullYear() - environment.maxData;
		let lastYear = this.selectedDate.getFullYear() + environment.maxData;
		for (let i = firstYear; i <= lastYear; i++) {
			this.years.push({
				name: i,
				value: i
			});
		}

		this.months = [
			{
				name: 'January',
				shortName: 'Jan',
				value: 0
			},
			{
				name: 'February',
				shortName: 'Feb',
				value: 1
			},
			{
				name: 'March',
				shortName: 'Mar',
				value: 2
			},
			{
				name: 'April',
				shortName: 'Apr',
				value: 3
			},
			{
				name: 'May',
				shortName: 'May',
				value: 4
			},
			{
				name: 'June',
				shortName: 'Jun',
				value: 5
			},
			{
				name: 'July',
				shortName: 'Jul',
				value: 6
			},
			{
				name: 'August',
				shortName: 'Aug',
				value: 7
			},
			{
				name: 'September',
				shortName: 'Sep',
				value: 8
			},
			{
				name: 'October',
				shortName: 'Oct',
				value: 9
			},
			{
				name: 'November',
				shortName: 'Nov',
				value: 10
			},
			{
				name: 'December',
				shortName: 'Dec',
				value: 11
			},
		];

		this.subs = this.appService.getData().subscribe((data: any) => {
			console.info('footer: date change detected', data);
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
		console.info('selectToday', this.selectedDate);
		this.selectedDate = new Date();
		this.appService.setData({
			date: this.selectedDate
		});
	}

	selectYear(): any {
		console.info('selected year', this.selectedYear);
		this.selectedDate.setFullYear(this.selectedYear);
		this.appService.setData({
			date: this.selectedDate
		});
	}

	selectMonth(): any {
		console.info('selected month', this.selectedMonth);
		this.selectedDate.setMonth(this.selectedMonth);
		this.appService.setData({
			date: this.selectedDate
		});
	}
}
