var promise = new Promise(function (resolve, reject) {
  reject([true, false, true, true]);
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
