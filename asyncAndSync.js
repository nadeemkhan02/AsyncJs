const getUser = (id) => {
  setTimeout(() => {
    console.log("Reading user from database...");
    return { id, gitHubUserName: "John" };
  }, 2000);
};
// const user = getUser(1);
// console.log(user);

console.log("Before");
const user = getUser(1);
console.log(user);
console.log("After");



//Callbacks
//Promises
//Async/await
