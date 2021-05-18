import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicCreateFormComponent } from './comic-create-form.component';

describe('ComicCreateFormComponent', () => {
  let component: ComicCreateFormComponent;
  let fixture: ComponentFixture<ComicCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
