import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditServingSizeComponent } from './edit-serving-size.component';

describe('EditServingSizeComponent', () => {
  let component: EditServingSizeComponent;
  let fixture: ComponentFixture<EditServingSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServingSizeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditServingSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
