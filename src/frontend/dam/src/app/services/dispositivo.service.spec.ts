// some legacy browsers (IE11, various SmartTVs) choke on 204import { TestBed } from '@angular/core/testing';

import { DispositivoService } from './dispositivo.service';

describe('DispositivoService', () => {
  let service: DispositivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispositivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
