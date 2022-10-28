export default class Expense{
  constructor(
    private id: string,
    private date: string,
    private category: string,
    private description: string,
    private value: number,
    private author_id: string
  ){}
}