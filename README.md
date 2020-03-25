
# Terminal Quiz

A little program to help me learn things I want to remember.

A JSON file can be used to configure a set of questions and answers that will be asked of you. 

Once you get the number of questions correct that is specified by the TQUIZ_NUMBER_OF_QUESTIONS env var the quiz will complete.


## Installation 

```
npm i tquiz
```

## Environment Variables

TQUIZ_NUMBER_OF_QUESTIONS = The number of questions you need to answer before tab 
TQUIZ_QUESTIONS_PATH = The place you add and edit questions


## Setup / Use

export the above in your .bashrc or similar script with a tquiz at the end to run it every time you open a new shell

```
.bashrc

...

## tquiz - my own little quiz program for when you open new shells
export TQUIZ_QUESTIONS_PATH='/Users/peterheesterman/.questions.json'
export TQUIZ_NUMBER_OF_QUESTIONS='3'
tquiz
```


