import { TestBed } from '@angular/core/testing';

import { QogirUiService } from './qogir-ui.service';

describe('QogirUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QogirUiService = TestBed.get(QogirUiService);
    expect(service).toBeTruthy();
  });
});
