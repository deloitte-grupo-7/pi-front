import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceList } from './service-list.component';

describe('ServiceCreateComponent', () => {
  let component: ServiceList;
  let fixture: ComponentFixture<ServiceList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceList ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
