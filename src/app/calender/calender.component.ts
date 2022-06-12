import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
	selector: 'app-calender',
	templateUrl: './calender.component.html',
	styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
	
	selectedDate: any = new Date();

	constructor(
		private appService: AppService
	) { }

	ngOnInit(): void {
	}

}
