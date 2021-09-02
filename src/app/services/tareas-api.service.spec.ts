import { TestBed } from '@angular/core/testing';

import { TareasApiService } from './tareas-api.service';

describe('TareasApiService', () => {
  let service: TareasApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareasApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
