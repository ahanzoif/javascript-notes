// 2 ways to write promise code
// 1st way

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB Calls, cryptograpgy, network

  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 2000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

//******************************************
// 2nd way

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async 2 is complete");
    resolve();
  }, 5000);
}).then(function () {
  console.log("Async 2 is resolved");
});

// important -> we use .then() for resolve

//******************************************

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "ahan", email: "ahan@gmail.com" });
  }, 7000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//******************************************

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; //false;
    if (!error) {
      resolve({ username: "kaif", password: "7070" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 8000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  })
