const { sum } = require('./main')

describe('Math module', () => {
  it("should return sum result when one number plus another number", () => {
    // Given
    const number = 1
    const anotherNumber = 2
    // When
    const result = sum(number, anotherNumber)
    // Then
    expect(result).toBe(2)
  })
})
