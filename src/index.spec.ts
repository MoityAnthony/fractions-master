import { Fraction } from ".";

describe("Test add function", () => {
  it("Should return Fraction instance with numerators = 0 and denominators = 1", () => {
    // Given
    const FractionA = new Fraction(0, 1);
    const FractionB = new Fraction(0, 1);

    // When
    const result = Fraction.add(FractionA, FractionB);

    // Then
    const expectedResult = new Fraction(0, 1);

    expect(result).toEqual(expectedResult);
  });

  it("Should return Fraction instance with numerator FractionA = 1 and denominators = 1", () => {
    // Given
    const FractionA = new Fraction(1, 1);
    const FractionB = new Fraction(0, 1);

    // When
    const result = Fraction.add(FractionA, FractionB);

    // Then
    const expectedResult = new Fraction(1, 1);

    expect(result).toEqual(expectedResult);
  });

  it("Should return Fraction instance with numerators = 1 and denominators = 1", () => {
    // Given
    const FractionA = new Fraction(1, 1);
    const FractionB = new Fraction(1, 1);

    // When
    const result = Fraction.add(FractionA, FractionB);

    // Then
    const expectedResult = new Fraction(2, 1);

    expect(result).toEqual(expectedResult);
  });

  it("Should return Fraction instance with numerators = 1 and denominators = 6", () => {
    // Given
    const FractionA = new Fraction(1, 6);
    const FractionB = new Fraction(1, 6);

    // When
    const result = Fraction.add(FractionA, FractionB);

    // Then
    const expectedResult = new Fraction(12, 36);

    expect(result).toEqual(expectedResult);
  });

  it("Should return Fraction instance with numerators = 1 and denominators is not equal", () => {
    // Given
    const FractionA = new Fraction(1, 1);
    const FractionB = new Fraction(1, 3);

    // When
    const result = Fraction.add(FractionA, FractionB);

    // Then
    const expectedResult = new Fraction(4, 3);

    expect(result).toEqual(expectedResult);
  });


  it("Should return Fraction instance with numerators = 1 and denominators is not equal", () => {
    // Given
    const fractionA = new Fraction(1, 2);
    const fractionB = new Fraction(1, 3);

    // When
    const result = Fraction.add(fractionA, fractionB);

    /**
     *  1/1 + 1/3 = 4/3
     *  1/2 + 1/3 = 3/6 + 2/6 = 5/6
     */

      // Then
    const expectedResult = new Fraction(5, 6);

    expect(result).toEqual(expectedResult);
  });

});
