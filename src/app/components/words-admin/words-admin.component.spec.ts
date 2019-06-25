import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsAdminComponent } from './words-admin.component';

describe('WordsAdminComponent', () => {
  let component: WordsAdminComponent;
  let fixture: ComponentFixture<WordsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
