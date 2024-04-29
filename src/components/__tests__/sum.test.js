import { sum } from "../sum"

test("sum function should return sum of the two numbers", () => {
  const result = sum(2, 5)

  //Assertion
  expect(result).toBe(7)
})
