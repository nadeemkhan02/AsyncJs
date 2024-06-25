const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("message")
  }, 2000);
});

promise.then((res)=>{
   console.log(res, "result")
})
