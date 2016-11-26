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

  it(`should create the '${cdaSelectorName}' component`, async(() => {
    expect(cdaComp).toBeTruthy();
  }));

  it(`should create the '${cdaSelectorName}' native element`, async(() => {
    expect(compiledCdaComp).toBeTruthy();
  }));

  it(`should render the '${labelTextContext}' label element`, async(() => {
    fixture.detectChanges();
    expect(compiledCdaComp.querySelector('label').textContent).toContain(labelTextContext);
  }));

  it(`should render the input element with autofocus set to true`, async(() => {
    fixture.detectChanges();
    expect(debugElement.query(By.css('input[autofocus]'))).toBeTruthy();
  }));

  // TODO-BB more tests: view elements and functionality
});
