import { TestBed } from '@angular/core/testing';

import { VendorPanelMainService } from './vendor-panel-main.service';

describe('VendorPanelMainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendorPanelMainService = TestBed.get(VendorPanelMainService);
    expect(service).toBeTruthy();
  });
});
