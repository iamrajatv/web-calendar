import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
	// date: any = '';
	selectedDate: any = new Date();
  constructor(
		private appService: AppService
	) { }

  ngOnInit(): void {
  }

	// dateChange(data: any): any {
	// 	console.log('dateChange called ', data);
	// 	this.selectedDate = data.date;
	// 	this.appService.setData({
	// 		date: data.date
	// 	});
	// 	// this.changeRef.detectChanges();
	// }
}
