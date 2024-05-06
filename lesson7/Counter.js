export default class Counter {
  constructor() {
    this.number = 0
  }
  addOne() {
    this.number++
  }
  minusOne() {
    this.number--
  }
  addTwo() {
    this.number += 2
  }
  minusTwo() {
    this.number -= 2
  }
}
