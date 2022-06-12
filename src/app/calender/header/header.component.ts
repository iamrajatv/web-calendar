import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppConfig } from 'src/app/app.config';
import { AppService } from 'src/app/app.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

	selectedDate: Date = new Date();
	minYear: any;
	maxYear: any;
	subs: any;

	constructor(private appService: AppService) { }

	ngOnInit(): void {
		this.selectedDate = new Date();

		// set min max year
		let temp = new Date();
		temp.setFullYear(temp.getFullYear() - AppConfig.maxData);
		this.minYear = new Date(temp);
		temp = new Date();
		temp.setFullYear(temp.getFullYear() + AppConfig.maxData);
		this.maxYear = new Date(temp);

		this.subs = this.appService.getData().subscribe((data: any) => {
			console.log('header: date change detected', data);
			if (data.date) {
				this.selectedDate = new Date(data.date);
				// console.log('selectedDate', this.selectedDate);
			} else {
				console.error('Invalid date passed!');
			}
		});
	}

	ngOnDestroy(): void {
		this.subs.unsubscribe();
	}

	prev(type: any): any {
		// console.log('prev ', type, ':', this.selectedDate.getDate(), ' ', this.selectedDate.getMonth(), ' ', this.selectedDate.getFullYear());
		let dateChange: any = false;
		switch (type) {
			case 'date':
				this.selectedDate.setDate(this.selectedDate.getDate() - 1);
				dateChange = true;
				break;
			case 'month':
				if ((this.selectedDate.getMonth() !== this.minYear.getMonth()) && (this.selectedDate.getFullYear() !== this.minYear.getFullYear())) {
					this.selectedDate.setMonth(this.selectedDate.getMonth() - 1);
					dateChange = true;
				}
				break;
			case 'year':
				if (this.selectedDate.getFullYear() !== this.minYear.getFullYear()) {
					this.selectedDate.setFullYear(this.selectedDate.getFullYear() - 1);
					dateChange = true;
				}
				break;
			default:
				break;
		}

		if (dateChange) {
			this.appService.setData({
				date: this.selectedDate
			});
		}
	}

	next(type: any): any {
		// console.log('next ', type, ':', this.selectedDate.getDate(), ' ', this.selectedDate.getMonth(), ' ', this.selectedDate.getFullYear());
		let dateChange: any = false;
		switch (type) {
			case 'date':
				this.selectedDate.setDate(this.selectedDate.getDate() + 1);
				dateChange = true;
				break;
			case 'month':
				if ((this.selectedDate.getMonth() !== this.maxYear.getMonth()) && (this.selectedDate.getFullYear() !== this.maxYear.getFullYear())) {
					this.selectedDate.setMonth(this.selectedDate.getMonth() + 1);
					dateChange = true;
				}
				break;
			case 'year':
				if (this.selectedDate.getFullYear() !== this.maxYear.getFullYear()) {
					this.selectedDate.setFullYear(this.selectedDate.getFullYear() + 1);
					dateChange = true;
				}
				break;
			default:
				break;
		}

		if (dateChange){
			this.appService.setData({
				date: this.selectedDate
			});
		}

	}
}
