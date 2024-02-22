import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeBTNComponent } from './like-btn.component';

describe('LikeBTNComponent', () => {
  let component: LikeBTNComponent;
  let fixture: ComponentFixture<LikeBTNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeBTNComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LikeBTNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
