export class Fraction {
    constructor(private numerator: number, private denominator: number) {
    }
    static add(FractionA: Fraction, FractionB: Fraction): Fraction {

        const denominatorA = FractionA.denominator;
        const denominatorB = FractionB.denominator;

        if (denominatorA === denominatorB) {
            return Fraction.addWithSameDenominator(FractionA, FractionB);
        }
        else {
            const FractionSameDenominator = Fraction.multiplyNumeratorAndDenominatorByNumber(FractionA, FractionB.denominator);

            return Fraction.addWithSameDenominator(FractionSameDenominator, FractionB);
        }
    }

    static addWithSameDenominator(FractionA: Fraction, FractionB: Fraction): Fraction {
        return new Fraction(FractionA.numerator + FractionB.numerator, FractionB.denominator);
    }

    static multiplyNumeratorAndDenominatorByNumber(fraction: Fraction, n: number): Fraction {
        return new Fraction(fraction.numerator * n, fraction.denominator * n);
    }
}