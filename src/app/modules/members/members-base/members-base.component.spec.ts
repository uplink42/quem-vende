import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersBaseComponent } from './members-base.component';

describe('MembersBaseComponent', () => {
  let component: MembersBaseComponent;
  let fixture: ComponentFixture<MembersBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
