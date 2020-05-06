import { TestBed } from '@angular/core/testing';

import { RandomPhotosService } from './random-photos.service';

describe('RandomPhotosService', () => {
  let service: RandomPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
