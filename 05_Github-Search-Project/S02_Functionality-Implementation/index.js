function getUsersData() {
  //get the DOM element of input element
  var inputDOMElement = document.querySelector("input");

  //access the value of input element using input dom-element
  var username = inputDOMElement.value;

  //send get request to gthub server
  fetch(`https://api.github.com/users/${username}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      //access the repo url from response
      var repos_url = data.repos_url;

      //access the username from response
      var name = data.name;

      //access bio from response
      var bio = data.bio;

      //access user image url from response
      var userImage = data.avatar_url;

      //access image dom element and assign image url to it
      document.querySelector("img").src = userImage;

      //access h4 dom element and assign name to it
      document.querySelector("h4").innerText = name;

      //access p dom element and assign bio to it
      document.querySelector("p").innerText =
        bio ||
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint !`;

      //sending get request to the git repo information
      fetch(repos_url)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          //extract first 10 repositories
          var reposData = data.slice(0, 10);

          //Access all the li's
          var collection_Of_li = document.querySelectorAll("li");

          //First make all li's content color to red and change innerText to No Repos to Display
          collection_Of_li.forEach(function (li) {
            li.style.color = "red";
            li.innerText = "No Repo's to display";
          });

          //Access each repo from response and assign to each li and change its content color to green
          reposData.forEach(function (repo, index) {
            collection_Of_li[index].innerText = repo.html_url;
            collection_Of_li[index].style.color = "green";
          });
        });
    })
    .catch(function (error) {
      alert("Something went wrong");
      console.log(error);
    });
}
