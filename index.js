const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let holderArray = []
  const newTutorials = []
  let wordContainer = '';
  let sentenceContainer = '';
  for(let i = 0; i < tutorials.length; i++ ){
    //split each sentence into words
    holderArray = (tutorials[i].split(' '))
    for(let i = 0; i < holderArray.length; i++) {
      //Capitalize first letter and combines with rest of the letters of the word
      //stores the capitalized word in a container
      wordContainer = holderArray[i][0].toUpperCase() + holderArray[i].slice(1);
      //if it is first word then word is stored in sentence container
      //else the word is added onto previous existing words
      if(i === 0){
        sentenceContainer = wordContainer
      }else {
        sentenceContainer = sentenceContainer + ' ' + wordContainer
      }
      //resets word container for next iteration
      wordContainer = ''
    }
    //pushes the capitalized title of books to a new array
    newTutorials.push(sentenceContainer)
    //resets the sentence for next title
    sentenceContainer = '';
  }

  return newTutorials
}

console.log(tutorials.map(titleCased))