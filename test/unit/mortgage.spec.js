const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage.js');

describe('Mortgage Calculator', () => {
  let mortgageCalculator = null;
  
  beforeEach(() => {
    mortgageCalculator = new Mortgage(420000, 3.75, 30, 12);
  });

  it('should have a monthly payment function', () => {
    expect(mortgageCalculator.monthlyPayment).to.exist;
  });

  it('should calculate monthly payment correctly', () => {
    expect(mortgageCalculator.monthlyPayment()).to.equal('1945.09');
  })

});
