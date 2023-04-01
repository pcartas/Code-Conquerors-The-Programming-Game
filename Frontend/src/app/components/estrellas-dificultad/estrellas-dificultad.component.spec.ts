import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstrellasDificultadComponent } from './estrellas-dificultad.component';

describe('EstrellasDificultadComponent', () => {
  let component: EstrellasDificultadComponent;
  let fixture: ComponentFixture<EstrellasDificultadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrellasDificultadComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstrellasDificultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
