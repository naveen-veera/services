import { TestBed } from '@angular/core/testing';

import { DateService } from './date.service';

describe('DateService', () => {
  let service: DateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateService);
  });

  it('test_case1', () => {
    expect(service).toBeTruthy();
  });

  it('test_case2', () => {
    let result = service.compareDate({firstDate: '07-03-1998',secondDate: '07-03-2021'})
    expect(result).toBe('Date 2 > Date 1');
  });

  it('test_case3', () => {
    let result = service.monthDiff({firstDate: '07-03-1998',secondDate: '07-03-2021'})
    expect(result).toBe('276');
  });

  it('test_case4', () => {
    let result = service.daysCount({firstDate: '07-03-1998',secondDate: '07-03-2021'})
    expect(result).toBe(8401);
  }); 
});
