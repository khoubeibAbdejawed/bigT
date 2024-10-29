import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PEcommerceComponent } from './p-ecommerce.component';

describe('PEcommerceComponent', () => {
  let component: PEcommerceComponent;
  let fixture: ComponentFixture<PEcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PEcommerceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
