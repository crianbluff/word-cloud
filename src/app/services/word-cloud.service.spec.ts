import { TestBed } from '@angular/core/testing';

import { WordCloudService } from './word-cloud.service';

describe('WordCloudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordCloudService = TestBed.get(WordCloudService);
    expect(service).toBeTruthy();
  });
});
