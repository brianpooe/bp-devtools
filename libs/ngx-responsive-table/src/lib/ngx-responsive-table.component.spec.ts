import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxResponsiveTableComponent } from './ngx-responsive-table.component';

describe('NgxResponsiveTableComponent', () => {
  let component: NgxResponsiveTableComponent;
  let fixture: ComponentFixture<NgxResponsiveTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxResponsiveTableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NgxResponsiveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
