
import { getRandomIndex } from './getRandomIndex'

test('I can get a index that represents a value in the given array', () => {
  const array = [1,2,3]
  const index = getRandomIndex(array)

  const lessThanLength = index < array.length
  const notNegative = index >= 0
  expect(lessThanLength && notNegative).toBe(true)
})
