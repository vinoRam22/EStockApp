import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockRegisterComponent } from './stock-register.component';

xdescribe('StockRegisterComponent', () => {
  let component: StockRegisterComponent;
  let fixture: ComponentFixture<StockRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
