export class User {
  constructor(
    private id: string,
    private name: string,
    private password: string
  ){}

  postId(){
    return this.id
  }
  postName(){
    return this.name
  }
  postPassword(){
    return this.password
  }
}