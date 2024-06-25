const getUser = (id, callback) => {
  setTimeout(() => {
    console.log("Reading user from database...");
    callback({ id, gitHubUserName: "John" });
  }, 2000);
};

const getRepos = (userName, callback) => {
  setTimeout(() => {
    console.log("Reding repos from database...");
    callback(["repo1", "repo 2", "repo 3"]);
  }, 2000);
};

const getCommit = (repo, callback) => {
  setTimeout(() => {
    console.log("Calling Githup API...");
    callback(["commit 1", "commit 2"]);
  }, 2000);
};

console.log("Before");
getUser(1, (user) => {
  console.log(user);
  getRepos(user?.gitHubUserName, (repo) => {
    console.log(repo);
    getCommit(repo[0], (commit) => {
      console.log(commit);
    });
  });
});
console.log("After");

//call back hell issue
