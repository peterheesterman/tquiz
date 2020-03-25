
import { readFileSync } from 'fs'
import { resolve } from 'path'

import { isNoFileError } from './isNoFileError'

import { Question } from '../types'

function loadQuestions(path: string): Array<Question> {
  let content
  try {
    content = readFileSync(path)
  } catch (error) {
    if (isNoFileError(error)) {
      console.warn(`There is no question file at ${resolve(path)}.`)
      return []
    }
    throw error
  }
  
  return JSON.parse(content.toString())
}

export { loadQuestions }
