function getUser(fn) {
  fn();
  console.log("all users Data");
}

getUser(function () {
  console.log("getting all users data");
});
