// Ex 1.6
// Avoiding array methods (except pop) because it feels like cheating
export class NaiveList<T> implements IList<T> {
  listArray: Array<T>;

  constructor() {
    this.listArray = [];
  }

  size(): number {
    return this.listArray.length;
  }

  get(i: number): T {
    if (i >= this.size()) {
      throw new Error('Out of bounds');
    }
    return this.listArray[i];
  }

  set(i: number, x: T): void {
    if (i >= this.size()) {
      throw new Error('Out of bounds');
    }
    this.listArray[i] = x;
  }

  add(i: number, x: T): void {
    if (i > this.size()) {
      throw new Error('Out of bounds');
    }

    let nextElement = this.listArray[i];
    this.listArray[i] = x;

    if (i === this.size() - 1) return;

    for (let j = i + 1; j < this.size(); j++) {
      let temp = this.listArray[j];
      this.listArray[j] = nextElement;
      nextElement = temp;
    }
    this.listArray[this.size()] = nextElement;
  }

  remove(i: number): T {
    if (i >= this.size()) {
      throw new Error('Out of bounds');
    }
    let returnValue = this.listArray[i];
    for (let j = i; j < this.size() - 1; j++) {
      this.listArray[j] = this.listArray[j + 1];
    }
    this.listArray.pop();
    return returnValue;
  }
}