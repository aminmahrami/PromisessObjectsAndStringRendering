// The goal is render a github informations on a page with:
// Promises, Map and Reduce.

function GitHubUser (username) {
  this.username = username
}

let ideable = new GitHubUser;

GitHubUser.prototype.getUserInformation = function (username) {
    let url = 'https://api.github.com/users/'+username;
    console.log(url);
  
    return new Promise((resolve, reject) => {
       const xhr = new XMLHttpRequest();
       xhr.open("GET", url);
       xhr.onload = () => resolve(xhr.responseText);
       xhr.onerror = () => reject(xhr.statusText);
       xhr.send();
});
};
console.log(ideable.getUserInformation('ideabile'));

GitHubUser.prototype.getRepos = function () {
    // Fill this
}

GitHubUser.prototype.render = function () {
    // Here return a string, be fancy and use map && reduce
}

function Render($element, html){
    // Fill this
}

/*
// Expecting
let gitUser = new GitHubUser('ideabile');

gitUser
    .getUserInformations()
    .then(function(informations){
        this.user = informations;
        return this.getRepos();
    })
    .then(function(repos) {
        this.repos = repos;
        Render('.githubView', this.render());
    });
*/