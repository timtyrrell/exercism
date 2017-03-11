class Bob {
  hey(message) {
    if (this.isSayingNothing(message)) {
      return 'Fine. Be that way!'
    } else if (this.isYelling(message)) {
      return 'Whoa, chill out!'
    } else if (this.isQuestion(message)) {
      return 'Sure.'
    } else {
      return 'Whatever.'
    }
  }

  isYelling(message) {
    // check for any letters
    let containsAnyLetters = false
    message.split('').forEach((char) => {
      if(char !== char.toUpperCase() || char !== char.toLowerCase()) {
        containsAnyLetters = true
      }
    })

    if(!containsAnyLetters) return false

    return message === message.toUpperCase()
  }

  isQuestion(message) {
    return message.slice(-1) === '?'
  }

  isSayingNothing(message) {
    return message.trim().length === 0
  }
}

export default Bob
