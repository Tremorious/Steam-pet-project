import { TestBed } from '@angular/core/testing';

import { FriendsPageResolverService } from './friends-page-resolver.service';

describe('FriendsPageResolverService', () => {
  let service: FriendsPageResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendsPageResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
