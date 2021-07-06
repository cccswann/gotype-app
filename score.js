const scoreStore = []

class Score {
  constructor(object){
    this.id = object.id
    this.score = object.score
    this.user_id = object.user_id


    scoreStore.push(this)
  }

  static getScores(){
    fetch('http://localhost:3000/api/v1/scores')
    .then(response => response.json())
    .then(data => {
      data.forEach((object) => {
        new Score(object)
      })
    })
  }


  sendScore(){
    fetch(`http://localhost:3000/api/v1/scores/${this.id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({user_id: `${this.user_id}`, score: `${this.score}`})
  }).then(res=>res.json())
  }


}