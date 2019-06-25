import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveWordsComponent } from './remove-words.component';

describe('RemoveWordsComponent', () => {
  let component: RemoveWordsComponent;
  let fixture: ComponentFixture<RemoveWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
