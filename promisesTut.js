// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error("message"));
//   }, 2000);
// });

// p.then((res) => console.log(res)).catch((err) => {
//   console.log(err.message);
// });

// promises that are already resolved or rejected (Promise APIs)
// const resolvedPromise = Promise.resolve({ id: 1 });
// const rejectedPromise = Promise.reject(new Error("message"));

// running parallel promises
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("message"));
  }, 2000);
});

// Promise.all([p1, p2])
//   .then((res) => {
//     console.log("response", res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// Promise.race([p1, p2]).then((res)=>{
//    console.log("response", res)
// })
