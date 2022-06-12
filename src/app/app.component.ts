import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	title: any = 'web-calendar';
	selectedDate: any = new Date();
	subs: any;

	constructor(private appService: AppService){}
	ngOnInit(): void {
		this.subs = this.appService.getData().subscribe((data: any) => {
			console.info('app: date change detected', data);
			if (data.date) {
				this.selectedDate = new Date(data.date);
				// console.info('selectedDate', this.selectedDate);
			} else {
				console.error('Invalid date passed!');
			}
		});
	}
}
