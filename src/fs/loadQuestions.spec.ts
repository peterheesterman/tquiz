
import { loadQuestions } from './loadQuestions'

test('I load empty set of questions if the file does not exist', () => {
  expect(loadQuestions('path')).toEqual([])
})

test('I can load a simple set of questions', () => {
  const questions = [
    { id: 1, text: "What is the capital of Australia?", answer: "Canberra" },
    { id: 2, text: "What is the capital of Indonesia?", answer: "Jakarta" }
  ]
  expect(loadQuestions('./src/fs/test-data.json')).toEqual(questions)
})
