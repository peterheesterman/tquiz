import readline from 'readline'

import { loadQuestions } from './fs/loadQuestions'
import { getRandomIndex } from './utils/getRandomIndex'
  
import { Question } from './types'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const TQUIZ_NUMBER_OF_QUESTIONS = Number(process.env.NUMBER_OF_QUESTIONS) || 2
const TQUIZ_QUESTIONS_PATH = process.env.TQUIZ_QUESTIONS_PATH || './questions.json'

const write = console.log.bind(this)
const lowerCaseEquals = (a: string, b: string) => a.toLowerCase() === b.toLowerCase()

function ask(questions: Array<Question>, answerRequired: number) : void {
  let end = false

  if (answerRequired === 0) {
    write('We are done for this session. Great work!')
    end = true
  } else if (questions.length === 0) {
    write('We ran out of questions')
    end = true
  }

  if (end) {
    rl.close()
    return
  }

  const randomIndex = getRandomIndex(questions)
  const question = questions[randomIndex]
  const { id, text, answer } = question

  rl.question(text + '\n', (reply: string) => {
    if (lowerCaseEquals(answer, reply)) {
      write('Nice work')
      ask(questions.filter(x => x.id !== question.id), answerRequired - 1)
    } else {
      write(`That is wrong, the correct answer is ${answer}.`)
      ask(questions, answerRequired)
    }
  })
}


function run(): void {
  const questions = loadQuestions(TQUIZ_QUESTIONS_PATH)

  if (questions.length === 0) {
    write('You have no questions, please add some to your questions file')
    return
  }

  write('Running quiz:\n')
  ask(questions, TQUIZ_NUMBER_OF_QUESTIONS);
}

run()
