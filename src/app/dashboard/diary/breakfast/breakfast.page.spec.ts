import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BreakfastPage } from './breakfast.page';

describe('BreakfastPage', () => {
  let component: BreakfastPage;
  let fixture: ComponentFixture<BreakfastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakfastPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BreakfastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
