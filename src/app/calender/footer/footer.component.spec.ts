import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

	it('should select current date', () => {
		let temp = new Date();
		component.selectToday();
		expect(component.selectedDate.getDate()).toEqual(temp.getDate());
		expect(component.selectedDate.getMonth()).toEqual(temp.getMonth());
		expect(component.selectedDate.getFullYear()).toEqual(temp.getFullYear());
  });

	it('should set given year', () => {
		let temp = new Date();
		component.selectedYear = 2020;
		component.selectYear();
		expect(component.selectedDate.getFullYear()).toEqual(2020);
  });

	it('should set given month', () => {
		let temp = new Date();
		component.selectedMonth = 6;
		component.selectMonth();
		expect(component.selectedDate.getMonth()).toEqual(6);
  });


});
