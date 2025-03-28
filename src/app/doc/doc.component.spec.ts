import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocComponent } from './doc.component';

describe('DocComponent', () => {
  let component: DocComponent;
  let fixture: ComponentFixture<DocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
