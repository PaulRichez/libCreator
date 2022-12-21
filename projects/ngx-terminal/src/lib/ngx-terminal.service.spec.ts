import { TestBed } from '@angular/core/testing';

import { NgxTerminalService } from './ngx-terminal.service';

describe('NgxTerminalService', () => {
  let service: NgxTerminalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTerminalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
