const cardStore = []

class Card {
  constructor(object){
    this.id = object.id
    this.sentence = object.sentence
    this.sentence_with_furigana = object.sentence_with_furigana
    this.word_base_list = object.word_base_list
    this.word_list = object.word_list
    this.deck_id = object.deck_id

    cardStore.push(this)
}

static getSentence(){
    fetch('http://localhost:3000/api/v1/cards')
    .then(response => response.json())
    .then(data => {
      data.forEach((object) => {
        new Card(object)
      })
    })
}

}