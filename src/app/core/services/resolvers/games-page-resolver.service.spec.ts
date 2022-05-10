import { TestBed } from '@angular/core/testing';

import { GamesPageResolverService } from './games-page-resolver.service';

describe('GamesPageResolverService', () => {
  let service: GamesPageResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesPageResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
