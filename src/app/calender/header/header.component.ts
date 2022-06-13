import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { environment } from 'src/environments/environment';

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
		temp.setFullYear(temp.getFullYear() - environment.maxData);
		this.minYear = new Date(temp);
		temp = new Date();
		temp.setFullYear(temp.getFullYear() + environment.maxData);
		this.maxYear = new Date(temp);

		this.subs = this.appService.getData().subscribe((data: any) => {
			console.info('header: date change detected', data);
			if (data.date) {
				this.selectedDate = new Date(data.date);
				// console.info('selectedDate', this.selectedDate);
			}
		});
	}

	ngOnDestroy(): void {
		this.subs.unsubscribe();
	}

	prev(type: any): any {
		// console.info('prev ', type, ':', this.selectedDate.getDate(), ' ', this.selectedDate.getMonth(), ' ', this.selectedDate.getFullYear());
		let dateChange: any = false;
		switch (type) {
			case 'month':
				if (this.selectedDate.getMonth() == this.minYear.getMonth()) {
					if (this.selectedDate.getFullYear() == this.minYear.getFullYear()){
					}else{
						this.selectedDate.setMonth(this.selectedDate.getMonth() - 1);
						dateChange = true;
					}
				}else{
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
		// console.info('next ', type, ':', this.selectedDate.getDate(), ' ', this.selectedDate.getMonth(), ' ', this.selectedDate.getFullYear());
		let dateChange: any = false;
		switch (type) {
			case 'month':
				if (this.selectedDate.getMonth() == this.maxYear.getMonth()) {
					if (this.selectedDate.getFullYear() == this.maxYear.getFullYear()) {
					} else {
						this.selectedDate.setMonth(this.selectedDate.getMonth() + 1);
						dateChange = true;
					}
				} else {
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
