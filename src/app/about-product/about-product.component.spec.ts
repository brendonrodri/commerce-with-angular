import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProductComponent } from './about-product.component';

describe('AboutProductComponent', () => {
  let component: AboutProductComponent;
  let fixture: ComponentFixture<AboutProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
