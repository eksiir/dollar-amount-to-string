import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {ConvertDollarAmountComponent} from './cda-convert-dollar-amount';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe(`App: DollarAmountToString`, () => {
  let fixture: ComponentFixture<ConvertDollarAmountComponent>,
    debugElement: DebugElement,
    cdaComp: ConvertDollarAmountComponent,
    compiledCdaComp: HTMLElement,
    cdaSelectorName = 'cda-convert-dollar-amount',
    labelTextContext = 'Enter Numerical Dollar Amount: $';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ConvertDollarAmountComponent
      ],
    });

    fixture = TestBed.createComponent(ConvertDollarAmountComponent);
    debugElement = fixture.debugElement;
    cdaComp = debugElement.componentInstance;
    compiledCdaComp = debugElement.nativeElement;
  });

  it(`should create the '${cdaSelectorName}' component`, () => {
    expect(cdaComp).toBeTruthy();
  });

  it(`should create the '${cdaSelectorName}' native element`, () => {
    expect(compiledCdaComp).toBeTruthy();
  });

  it(`should render the '${labelTextContext}' label element`, () => {
    fixture.detectChanges();
    expect(compiledCdaComp.querySelector('label').textContent).toContain(labelTextContext);
  });

  it(`should render the input element with autofocus set to true`, () => {
    fixture.detectChanges();
    expect(debugElement.query(By.css('input[autofocus]'))).toBeTruthy();
  });

  // TODO-BB more tests: view elements and functionality
  xit(`should ...`, async(() => {
    fixture.detectChanges();
    expect(true).toBeTruthy();
  }));
});
