# Convert Numerical Dollar Amount to English Words

Convert a positive integer number to its equivalent English words. 

The output is unspaced and CamelCased. Assume that the numbers are < 1000000000 (1 billion). 
In case of ambiguities e.g. 2200 which can be 
<strong>TwoThousandTwoHundredDollars</strong> or <strong>TwentyTwoHundredDollars</strong>, 
always choose the representation with the larger base i.e. TwoThousandTwoHundredDollars 

## Examples
<table>
  <tr>
    <th>Input</th>
    <th>Expected Output</th>
  </tr>
  <tr>
    <td>3</td>
    <td>ThreeDollars</td>
  </tr>
  <tr>
    <td>466</td>
    <td>FourHundredSixtySixDollars</td>
  </tr>
  <tr>
    <td>1234</td>
    <td>OneThousandTwoHundredThirtyFourDollars</td>
  </tr>
  <tr>
    <td>10</td>
    <td>TenDollars</td>
  </tr>
  <tr>
    <td>21</td>
    <td>TwentyOneDollars</td>
  </tr>
</table>

## Pre-requisites
You must have the latest version of the following installed on your system:

    git
    node
    npm
    ng (Angular CLI)

## Installation
Cloning this repository say in the <strong>dollar-amount-to-string</strong> directory, at shell prompt do

    git clone git@github.com:eksiir/dollar-amount-to-string.git
    cd dollar-amount-to-string
    npm install


## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 
Use the `-prod` flag for a production build.

## Run
Run `ng serve` for a development server. Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.

## License
The MIT License (MIT).

See the LICENSE file in this project for more details.
