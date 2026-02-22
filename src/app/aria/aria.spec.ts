import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aria } from './aria';

describe('Aria', () => {
  let component: Aria;
  let fixture: ComponentFixture<Aria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
