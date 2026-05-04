function f1(callback) {
  callback();
  console.log("f1 is called");
}

function f2(callback) {
  callback();
  console.log("f2 is called");
}

function f3(callback) {
  callback();
  console.log("f3 is called");
}

function f4() {
  console.log("f4 is called");
}

f1(() => {
  f2(() => {
    f3(() => {
      // callback hell
      f4();
    });
  });
});
