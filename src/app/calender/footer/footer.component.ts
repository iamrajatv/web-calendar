import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	years: any[] = [];
	months: any[] = [];

  constructor() { }

  ngOnInit(): void {
		this.years = [
			{
				name: 2020
			},
			{
				name: 2021
			},
			{
				name: 2022
			},
			{
				name: 2023
			}
		];
		this.months = [
			{
				name: 'Jan'
			},
			{
				name: 'Feb'
			},
			{
				name: 'Mar'
			},
			{
				name: 'Apr'
			},
			{
				name: 'May'
			},
			{
				name: 'Jun'
			},
			{
				name: 'Jul'
			},
			{
				name: 'Aug'
			},
			{
				name: 'Sep'
			},
			{
				name: 'Oct'
			},
			{
				name: 'Nov'
			},
			{
				name: 'Dec'
			},
		];
  }

}
