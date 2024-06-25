const getUser = (id) => {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      console.log("Reading user from database...");
      resolve({ id, gitHubUserName: "John" });
    }, 2000);
  });
};

const getRepos = (userName) => {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      console.log("Calling github API...");
      resolve(["repo1 ", "repo 2", "repo 3"]);
    }, 2000);
  });
};

const getCommits = (repo) => {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      console.log("Calling github API...");
      resolve(["commit 1", "commit 2", "commit 3"]);
    }, 2000);
  });
};

const displayCommits = async () => {
  const user = await getUser(1);
  const repo = await getRepos(user.gitHubUserName);
  const commits = await getCommits(repo[0]);
  console.log(commits, "commits");
};

console.log("Before");
displayCommits();
console.log("After");

//call back hell issue
