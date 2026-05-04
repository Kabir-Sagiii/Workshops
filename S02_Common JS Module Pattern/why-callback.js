function task1(fn) {
  fn();
  console.log("A");
  fn();
  console.log("B");
  fn();
}

function task2(fn) {
  fn();
  console.log("a");
  console.log("b");
  console.log("c");
  console.log("d");
}

function task() {
  console.log("1");
  console.log("2");
  console.log("3");
}

function alternateTask() {
  console.log("i");
  console.log("ii");
  console.log("iii");
  console.log("iv");
}

task1(task);
console.log("");
task2(task);

task1(alternateTask);
console.log("");
task2(alternateTask);
