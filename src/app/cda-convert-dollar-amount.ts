import {Component} from '@angular/core';

@Component({
  selector: 'cda-convert-dollar-amount',
  templateUrl: 'cda-convert-dollar-amount.html'
})
export class ConvertDollarAmountComponent {
  invalidInput = '';
  englishAmt = '';

  private englishSingleDigit = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  private englishLess20 = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  private englishLess100 = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  private colors = ['red', 'blue', 'brown', 'magenta', 'orange', 'cyan', 'coral', 'black', 'greenyellow'];
  private fontSizes = ['24px', '14px', '18px', '20px', '24px', '32px', '36px', '40px', '42px'];
  private fontWeights = ['normal', 'normal', 'italic', 'bold'];

  convertDigitalAmt(digitalAmt: string): void {
    this.invalidInput = '';
    this.englishAmt = '';

    if (!digitalAmt) {
      return;                                     // empty input, just Enter
    }

    // remove the leading zeros
    digitalAmt = digitalAmt.replace(/^0+/, '');
    if (!digitalAmt) {
      this.englishAmt = 'ZeroDollar';             // it was all zeros
      return;
    }

    if (!/^\d+$/.test(digitalAmt)) {
      this.invalidInput = 'Invalid dollar amount: Negative, or has fractional part or just not a number';
      return;
    }

    let intAmt = parseInt(digitalAmt, 10);         // returns NaN if not a number
    if (!intAmt) {
      this.invalidInput = 'Invalid dollar amount: Not a number';      // we shouldn't really see this ...
      return;
    }

    this.englishAmt = this.convert(intAmt);
    if (this.englishAmt) {
      this.englishAmt += ((intAmt <= 1) ? 'Dollar' : 'Dollars');
    }
  }

  private convert(intAmt: number): string {
    if (intAmt < 10) {
      return this.englishSingleDigit[intAmt % 10];
    }

    if (intAmt < 20) {
      return this.englishLess20[intAmt % 10];
    }

    if (intAmt < 100) {
      return this.englishLess100[Math.trunc(intAmt / 10)] + this.convert(intAmt % 10);
    }

    if (intAmt < 1000) {
      return this.convert(Math.trunc(intAmt / 100)) + 'Hundred' + this.convert(intAmt % 100);
    }

    if (intAmt < 1000000) {
      return this.convert(Math.trunc(intAmt / 1000)) + 'Thousand' + this.convert(intAmt % 1000);
    }

    if (intAmt < 1000000000) {
      return this.convert(Math.trunc(intAmt / 1000000)) + 'Million' + this.convert(intAmt % 1000000);
    }

    this.invalidInput = 'Invalid dollar amount: More than max $1B';
    return '';
  }

  public outputStyle() {
    let length = (this.englishAmt) ? this.englishAmt.length : 0;
    // index to the arrays will end up being 0 for invalid input error message

    return {
      'color': this.colors[length % this.colors.length],
      'font-size': this.fontSizes[length % this.fontSizes.length],
      'font-weight': this.fontWeights[length % this.fontWeights.length]
    };
  }
}
