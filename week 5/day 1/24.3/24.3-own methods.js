Array.prototype.filter = function (callbkFn) {
  let arrFilter = [];
  for (let i = 0; i < this.length; i++) {
    if (callbkFn(this[i])) {
      arrFilter.push(this[i]);
    }
  }
  return arrFilter;
};

Array.prototype.find = function (callbkFn) {
  if (this.length > 0) {
    let i = 0;
    let found = callbkFn(this[i]);
    while (!found && i < this.length) {
      found = callbkFn(this[i]);
      i++;
    }
  }
  let ans = found ? this[i] : undefined;
  return ans;
};

Array.prototype.reduce = function (reducer) {
  let ans = this[0];
  if (this.length > 0) {
    for (let i = 0; i < this.length - 1; i++) {
      ans = reducer(ans, this[i + 1]);
    }
  }
  return ans;
};

let a = new Array();
console.log(a);
