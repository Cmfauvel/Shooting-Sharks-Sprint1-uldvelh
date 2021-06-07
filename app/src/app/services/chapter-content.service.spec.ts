import { TestBed } from '@angular/core/testing';

import { ChapterContentService } from './chapter-content.service';

describe('ChapterContentService', () => {
  let service: ChapterContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChapterContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
