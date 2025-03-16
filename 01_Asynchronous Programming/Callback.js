function f1(x) {
  console.log("f1 is called", x);
  x();
  console.log("-----------------------------------");
}

function f2() {
  console.log("named function as a callback");
}

f1(f2); // no one prefer's

f1(function () {
  console.log("Anonymous as a callback");
});

f1(() => {
  console.log("Arrow as a callback");
});
