import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LunchPage } from './lunch.page';

describe('LunchPage', () => {
  let component: LunchPage;
  let fixture: ComponentFixture<LunchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LunchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
