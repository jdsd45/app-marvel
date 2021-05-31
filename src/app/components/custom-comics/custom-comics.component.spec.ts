import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComicsComponent } from './custom-comics.component';

describe('CustomComicsComponent', () => {
  let component: CustomComicsComponent;
  let fixture: ComponentFixture<CustomComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomComicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
