const obj = {
  name: "Tal",
  printName: function () {
    console.log(this.name);
  },
  printAfterSec: function () {
    setTimeout(
      function () {
        console.log(this.name);
      }.bind(this), //setTimeout refers this to window, so I used 'bind' to make it refer this to obj.
      200
    );
  },
};

obj.printAfterSec();
