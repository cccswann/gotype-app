const deckStore = []

class Deck {
    constructor(object){
    this.id = object.id
    this.deck_name = object.deck_name

    deckStore.push(this)
}

static getDecks(){
    fetch('http://localhost:3000/api/v1/decks')
    .then(response => response.json())
    .then(data => {
      data.forEach((object) => {
        new Deck(object)
      })
    })
  }
}