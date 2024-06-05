import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnatomyobservableComponent } from './anatomyobservable.component';

describe('AnatomyobservableComponent', () => {
  let component: AnatomyobservableComponent;
  let fixture: ComponentFixture<AnatomyobservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnatomyobservableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnatomyobservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
