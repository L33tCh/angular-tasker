import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardSharedModule } from './dashboard.module';
// import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  const oldResetTestingModule = TestBed.resetTestingModule;
  // let _DashboardService: DashboardService;

  // const mockDashboardService = {
  //   getDashboards: () => of([]),
  // };

  beforeAll(done => (async () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ DashboardComponent ],
      imports: [DashboardSharedModule],
      // providers: [
      //   {
      //     provide: DashboardService,
      //     useValue: mockDashboardService
      //   }
      // ]
    });

    await TestBed.compileComponents();
    TestBed.resetTestingModule = () => TestBed;
  })().then(done).catch(done.fail));

  afterAll(() => {
    TestBed.resetTestingModule = oldResetTestingModule;
    TestBed.resetTestingModule();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    // _DashboardService = fixture.debugElement.injector.get(DashboardService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
