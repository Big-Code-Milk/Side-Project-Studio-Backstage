import { TestBed } from '@angular/core/testing';

import { ImgurApiHelperService } from './imgur-api-helper.service';

describe('ImgurApiHelperService', () => {
  let service: ImgurApiHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgurApiHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
