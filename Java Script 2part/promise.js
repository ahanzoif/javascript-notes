// Promise is an object in JS.
// it have 3 stages
// 1.pending
// 2.fuilfilled
// 3.rejected

//response store in .then() -> resolve
//error store in .catch() -> catch
//.finally() store everything/always run

//******************************************

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB Calls, cryptograpgy, network, etc.

  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 2000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

//******************************************

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async 2 is complete");
    resolve();
  }, 5000);
}).then(function () {
  console.log("Async 2 is resolved");
});

// important -> we use .then() for resolve.
// we use .catch() for rejecet.

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
  }) //chaining (return the value of last .then())
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

//******************************************

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true; //false;
    if (!error) {
      resolve({ language: "java script", platform: "YouTube" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 9000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

//******************************************

async function getAllUsers() {
  try {
    const response = await fetch("https://api.github.com/users/ahanzoif");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}
getAllUsers();

//******************************************
fetch("https://api.github.com/users/ahanzoif")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

//******************************************

//async wait krta hai work ko execute hone mein
