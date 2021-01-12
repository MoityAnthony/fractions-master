export class Fraction {

  constructor(private numerator: number, private denominator: number) {
  }

  static add(FractionA: Fraction, FractionB: Fraction): Fraction {

    const multipliedFractionA = Fraction.multiplyNumeratorAndDenominatorByNumber(FractionA, FractionB.denominator);
    const multipliedFractionB = Fraction.multiplyNumeratorAndDenominatorByNumber(FractionB, FractionA.denominator);

    return Fraction.addWithSameDenominator(multipliedFractionA, multipliedFractionB);

  }

  static addWithSameDenominator(FractionA: Fraction, FractionB: Fraction): Fraction {
    return new Fraction(FractionA.numerator + FractionB.numerator, FractionB.denominator);
  }

  static multiplyNumeratorAndDenominatorByNumber(fraction: Fraction, n: number): Fraction {
    return new Fraction(fraction.numerator * n, fraction.denominator * n);
  }
}
