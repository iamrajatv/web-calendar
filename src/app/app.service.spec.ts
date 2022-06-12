import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should pass data to observable and return true', () => {
		expect(service.setData('test data')).toBe(true);
  });

  it('should get data from observable', (done: DoneFn) => {
		service.getData().subscribe(value => {
			console.log('value', value);
			expect(value).toBeInstanceOf(Object);
			done();
		});
  });
});
