import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsComponent } from './events.component';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

	it('should return uniqueId', () => {
		expect(component.getUniqueEventId()).toBeCloseTo(Date.now())
	})

	it('should set events list for a selected date', () => {
		component.setEvents([{ title: 'test1' }])
		expect(component.selectedDateEvents.length).toEqual(1);
	})

	it('should push event in list for a selected date', () => {
		component.addEvent({ title: 'test1' })
		// console.log('component.selectedDateEvents.length', component.selectedDateEvents.length);
		expect(component.selectedDateEvents.length).toBeGreaterThan(0);
	})

	it('should add edit flag ', () => {
		let event: any = { title: 'test1', id: 123 };
		component.editEvent(event, 1)
		expect(event.edit).toBeTrue();
	})

	it('should enable edit flag ', () => {
		let event: any = { title: 'test1', id: 123 };
		component.editEvent(event, 1)
		expect(event.edit).toBeTrue();
	})

	it('should disable edit flag ', () => {
		let event: any = { title: 'test1', id: 123 };
		component.cancelEdit(event, 1)
		expect(event.edit).toBeFalse();
	})

	it('should update given event title', () => {
		let event: any = { title: 'test1', id: 123 };
		component.updateEvent(event, 1)
		// need to check ngmodel
		expect(event.edit).toBeFalse();
	})

	it('should delete event from list ', () => {
		let events: any = [{ title: 'test1', id: 121 }, { title: 'test2', id: 122 }, { title: 'test3', id: 123 }];
		component.setEvents(events);
		expect(component.selectedDateEvents.length).toEqual(3);
		component.deleteEvent({id:123},2)
		expect(component.selectedDateEvents.length).toEqual(2);
	})
});
