import { TestBed } from '@angular/core/testing';

import { ShapeManagerService } from './shape-manager.service';

describe('ShapeManagerService', () => {
  let service: ShapeManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShapeManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
