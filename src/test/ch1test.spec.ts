import { NaiveList } from '../Ch1/NaiveList';
import { expect } from 'chai';
import 'mocha';

describe('NaiveList', function () {
  // size: () => number,
  // get: (i: number) => T,
  // set: (i: number, x: T) => void,
  // add: (i: number, x: T) => void,
  // remove: (i: number) => T

  describe('#size()', function () {
    it('should return 0 if list is empty', function () {
      let list = new NaiveList();
      expect(list.size()).to.equal(0);
    });

    it('should return 1 if one element has been added', function () {
      let list = new NaiveList<string>();
      list.add(0, 'foo');
      expect(list.size()).to.equal(1);
    });

    it('should return 4 if 4 elements have been added', function () {
      let list = new NaiveList<string>();
      for (let j = 0; j < 4; j++) {
        list.add(j, 'foo');
      }
      expect(list.size()).to.equal(4);
    });
  });

  describe('#get()', function () {
    it('should throw error if index is out of bounds', function () {
      let list = new NaiveList<string>();
      list.add(0, 'foo');
      list.add(1, 'bar');
      expect(list.get.bind(list, 2)).to.throw('Out of bounds');
      expect(list.get.bind(list, 7)).to.throw('Out of bounds');
    });

    it('should throw error if list is empty', function () {
      let list = new NaiveList<string>();
      expect(list.get.bind(list, 0)).to.throw('Out of bounds');
    });

    it('should get element from singleton list', function () {
      let list = new NaiveList<string>();
      list.add(0, 'bar');
      expect(list.get(0)).to.equal('bar');
    });

    it('should get first element from longer list', function () {
      let list = new NaiveList<string>();
      list.add(0, 'bar');
      for (let i = 1; i < 10; i++) {
        list.add(i, 'foo');
      }
      expect(list.get(0)).to.equal('bar');
    });

    it('should get middle element from longer list', function () {
      let list = new NaiveList<string>();
      for (let i = 0; i < 10; i++) {
        list.add(i, 'foo');
      }
      list.add(10, 'bar');
      for (let i = 11; i < 20; i++) {
        list.add(i, 'foo');
      }
      expect(list.get(10)).to.equal('bar');
    });

    it('should get last element from longer list', function () {
      let list = new NaiveList<string>();
      for (let i = 0; i < 10; i++) {
        list.add(i, 'foo');
      }
      list.add(10, 'bar');
      expect(list.get(10)).to.equal('bar');
    });
  });

  describe('#set()', function () {
    it('should throw error if index is out of bounds', function () {
      let list = new NaiveList<string>();
      list.add(0, 'foo');
      list.add(1, 'bar');
      expect(list.set.bind(list, 2, 'baz')).to.throw('Out of bounds');
      expect(list.set.bind(list, 7, 'baz')).to.throw('Out of bounds');
    });

    it('should throw error if list is empty', function () {
      let list = new NaiveList<string>();
      expect(list.set.bind(list, 0, 'baz')).to.throw('Out of bounds');
    });

    it('should set elements at beginning of list', function () {
      let list = new NaiveList<string>();
      for (let i = 0; i < 10; i++) {
        list.add(i, 'foo');
      }
      list.set(0, 'bar');

      expect(list.get(0)).to.equal('bar');
      for (let i = 1; i < 10; i++) {
        expect(list.get(i)).to.equal('foo');
      }
    });

    it('should set elements at end of list', function () {
      let list = new NaiveList<string>();
      for (let i = 0; i < 10; i++) {
        list.add(i, 'foo');
      }
      list.set(9, 'bar');

      expect(list.get(9)).to.equal('bar');
      for (let i = 1; i < 9; i++) {
        expect(list.get(i)).to.equal('foo');
      }
    });

    it('should set elements in middle of list', function () {
      let list = new NaiveList<string>();
      for (let i = 0; i < 10; i++) {
        list.add(i, 'foo');
      }
      list.set(5, 'bar');

      expect(list.get(5)).to.equal('bar');
      for (let i = 1; i < 9; i++) {
        if (i !== 5) expect(list.get(i)).to.equal('foo');
      }
    });
  });

  describe('#add()', function () {
    it('should throw error if index is out of bounds', function () {
      let list = new NaiveList<string>();
      list.add(0, 'foo');
      list.add(1, 'bar');
      expect(list.add.bind(list, 3, 'baz')).to.throw('Out of bounds');
      expect(list.add.bind(list, 7, 'baz')).to.throw('Out of bounds');
    });

    it('should add element to empty list', function () {
      let list = new NaiveList<string>();
      list.add(0, 'bar');
      expect(list.get(0)).to.equal('bar');
    });

    it('should add element to end of list', function () {
      let list = new NaiveList<string>();
      for (let i = 0; i < 10; i++) {
        list.add(i, 'foo');
      }
      list.add(10, 'bar');

      for (let i = 0; i < 10; i++) {
        expect(list.get(i)).to.equal('foo');
      }
      expect(list.get(10)).to.equal('bar');
    });

    it('should add element to beginning of list', function () {
      let list = new NaiveList<string>();
      for (let i = 0; i < 10; i++) {
        list.add(i, 'foo');
      }
      list.add(0, 'bar');

      expect(list.get(0)).to.equal('bar');
      for (let i = 1; i < 11; i++) {
        expect(list.get(i)).to.equal('foo');
      }
    });

    it('should add element to middle of list', function () {
      let list = new NaiveList<string>();
      for (let i = 0; i < 10; i++) {
        list.add(i, 'foo');
      }
      list.add(5, 'bar');

      expect(list.get(5)).to.equal('bar');
      for (let i = 1; i < 11; i++) {
        if (i !== 5) expect(list.get(i)).to.equal('foo');
      }
    });
  });

  describe('#remove()', function () {
    it('should throw error if index is out of bounds', function () {
      let list = new NaiveList<string>();
      list.add(0, 'foo');
      list.add(1, 'bar');

      expect(list.remove.bind(list, 2)).to.throw('Out of bounds');
      expect(list.remove.bind(list, 7)).to.throw('Out of bounds');
    });

    it('should throw error if list is empty', function () {
      let list = new NaiveList<string>();
      expect(list.remove.bind(list, 0)).to.throw('Out of bounds');
    });

    it('should remove element from beginning of list', function () {
      let list = new NaiveList<string>();
      for (let i=0; i<10; i++) {
        list.add(i, 'foo' + i);
      }
      let removedValue = list.remove(0);

      expect(removedValue).to.equal('foo0');
      expect(list.get(0)).to.equal('foo1');
      expect(list.size()).to.equal(9);
    });

    it('should remove element from middle of list', function () {
      let list = new NaiveList<string>();
      for (let i=0; i<10; i++) {
        list.add(i, 'foo' + i);
      }
      let removedValue = list.remove(5);

      expect(removedValue).to.equal('foo5');
      expect(list.get(5)).to.equal('foo6');
      expect(list.get(8)).to.equal('foo9');
      expect(list.size()).to.equal(9);
    });

    it('should remove element from end of list', function () {
      let list = new NaiveList<string>();
      for (let i=0; i<10; i++) {
        list.add(i, 'foo' + i);
      }
      let removedValue = list.remove(9);

      expect(removedValue).to.equal('foo9');
      expect(list.remove.bind(list, 9)).to.throw('Out of bounds');
      expect(list.size()).to.equal(9);
    });
  });
});