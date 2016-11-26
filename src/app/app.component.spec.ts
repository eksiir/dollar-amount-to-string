import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ConvertDollarAmountComponent} from './cda-convert-dollar-amount';
import {DebugElement} from '@angular/core';

let fixture: ComponentFixture<AppComponent>,
  debugElement: DebugElement,
  appComp: AppComponent,
  compiledAppComp: HTMLElement,
  h1TextContent = 'Convert Numerical Dollar Amount to English Words',
  cdaSelectorName = 'cda-convert-dollar-amount';

describe(`App: DollarAmountToString`, () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ConvertDollarAmountComponent
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
    appComp = debugElement.componentInstance;
    compiledAppComp = debugElement.nativeElement;
  });

  it(`should create the app component`, async(() => {
    expect(appComp).toBeTruthy();
  }));

  it(`should create app native element`, async(() => {
    expect(compiledAppComp).toBeTruthy();
  }));

  it(`should render the main header in an h1 element`, async(() => {
    fixture.detectChanges();
    expect(compiledAppComp.querySelector('h1').textContent).toContain(h1TextContent);
  }));

  it(`should create the '${cdaSelectorName}' component`, async(() => {
    fixture.detectChanges();
    expect(compiledAppComp.querySelector(cdaSelectorName)).toBeTruthy();
  }));
});
