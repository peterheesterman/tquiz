
import { isNoFileError } from './isNoFileError'

test('I can identify a file not found error', () => {
  const error = { errno: -2, message: 'ENOENT: no such file or directory' }

  expect(isNoFileError(error)).toBe(true)
})

test('I fail any other error type', () => {
  const error = { errno: -1, message: 'some other error' }

  expect(isNoFileError(error)).toBe(false)
})


