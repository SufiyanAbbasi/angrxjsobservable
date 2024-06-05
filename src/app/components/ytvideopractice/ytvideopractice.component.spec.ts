import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtvideopracticeComponent } from './ytvideopractice.component';

describe('YtvideopracticeComponent', () => {
  let component: YtvideopracticeComponent;
  let fixture: ComponentFixture<YtvideopracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YtvideopracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YtvideopracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
