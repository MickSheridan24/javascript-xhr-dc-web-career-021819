function getRepositories() {
  console.log("This worked");
  const req = new XMLHttpRequest();
  req.addEventListener("load", showRepositories);
  req.open("GET", "https://api.github.com/users/octocat/repos");
  req.send();
}

function showRepositories(event, data) {
  console.log(this.responseText);
  let repos = JSON.parse(this.responseText);
  let repoList = `<ul>${repos.map(r => '<a href= "#" onClick = "getCommits(${r})">' + r.name + "</a>").join("")}</ul>`;

  document.getElementById("repositories").innerHTML = repoList;
}

function getCommits(el) {
  const name = el.dataset.repo;
  const req = new XMLHttpRequest();
  req.addEventListener("load", showCommits);
  req.open("GET", "https://api.github.com/repos/octocat/" + name + "/commits");
  req.send;
}

function showCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits.map(commit => "<li><strong>" + commit.commit.author.name + "</strong> - " + commit.commit.message + "</li>").join("")}</ul>`;
  document.getElementById("commits").innerHTML = commitsList;
}
