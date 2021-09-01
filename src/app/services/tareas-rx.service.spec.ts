import { TestBed } from '@angular/core/testing';

import { TareasRxService } from './tareas-rx.service';

describe('TareasRxService', () => {
  let service: TareasRxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareasRxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
