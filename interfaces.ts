interface IQueue<T> {
  add: (x: T) => void,
  remove: () => T
}

interface IList<T> {
  size: () => number,
  get: (i: number) => T,
  set: (i: number, x: T) => void,
  add: (i: number, x: T) => void,
  remove: (i: number) => T
}

interface IUSet<T> {
  size: () => number,
  add: (x: T) => boolean,
  remove: (x: T) => T | null,
  find: (x: T) => T | null
}

interface ISSet<T> extends IUSet<T> {
  compare: (x: T, y: T) => number
}