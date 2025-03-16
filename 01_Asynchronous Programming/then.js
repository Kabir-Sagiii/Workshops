var promise = new Promise(function (resolve, reject) {
  //   reject([true, false]);
  resolve([10, 20, 30]);
});

promise
  .then(function (successdata) {
    console.log("success-data");
    console.log(successdata);
  })
  .catch(function (errordata) {
    console.log("error-data");
    console.log(errordata);
  });
