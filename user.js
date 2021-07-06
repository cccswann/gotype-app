const userStore = []

class User {
  constructor(object){
    this.id = object.id
    this.username = object.username


    userStore.push(this)
  }

  static getUsers(){
    fetch('http://localhost:3000/api/v1/users')
    .then(response => response.json())
    .then(data => {
      data.forEach((object) => {
        new User(object)
      })
    })
  }
}
