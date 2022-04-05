import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { RouterTestingModule } from '@angular/router/testing';
=======
>>>>>>> 5ed20cd2ea4f61e9f3adeb1b5368fa57c95b368d
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [
        RouterTestingModule
      ],
=======
>>>>>>> 5ed20cd2ea4f61e9f3adeb1b5368fa57c95b368d
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'ngexpert_lab'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ngexpert_lab');
=======
  it(`should have as title 'ngexpert'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ngexpert');
>>>>>>> 5ed20cd2ea4f61e9f3adeb1b5368fa57c95b368d
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('.content span')?.textContent).toContain('ngexpert_lab app is running!');
=======
    expect(compiled.querySelector('.content span')?.textContent).toContain('ngexpert app is running!');
>>>>>>> 5ed20cd2ea4f61e9f3adeb1b5368fa57c95b368d
  });
});
