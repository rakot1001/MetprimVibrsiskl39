function MyArrayProto() {
  this.map = function (cb) {
    const result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      const cbResult = cb(this[i], i, this);
      result.push(cbResult);
    }
  };
}

function MyArray(...args) {}

MyArray.prototype = new MyArrayProto();

const meArray = new MyArray(
  {
    age: 18,
    name: "test",
  },
  {
    age: 21,
    name: "test2",
  }
);
