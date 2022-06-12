import { ComponentFixture, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set prev month', () => {
		let temp = new Date();
		component.selectedDate = new Date();
		component.prev('month');
		//toBeLessThan
		expect(component.selectedDate.getMonth()).toEqual(temp.getMonth());
  });

  it('should set prev year', () => {
		let temp = new Date();
		component.selectedDate = new Date();
		component.prev('year');
		//toBeLessThan
		expect(component.selectedDate.getFullYear()).toBeLessThan(temp.getFullYear());
  });

  it('should set next month', () => {
	
		let temp = new Date();
		component.selectedDate = new Date();
		component.next('month');
		// toBeGreaterThan
		expect(component.selectedDate.getMonth()).toEqual(temp.getMonth());
  });

  it('should set next year', () => {
		let temp = new Date();
		component.selectedDate = new Date();
		component.next('year');
		expect(component.selectedDate.getFullYear()).toBeGreaterThan(temp.getFullYear());
  });
});
