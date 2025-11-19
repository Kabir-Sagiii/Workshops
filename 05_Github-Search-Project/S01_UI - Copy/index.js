function getUserDetails() {
  var user = document.querySelector("input").value;
  var repo_url;
  var image = document.querySelector("img");
  var h4 = document.querySelector("h4");

  fetch(`https://api.github.com/users/${user}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      //   console.log(data);
      repo_url = data.repos_url;
      image.src = data.avatar_url;
      h4.innerText = data.name || "user name";

      fetch(repo_url)
        .then((res) => {
          return res.json();
        })
        .then((repo_data) => {
          //   console.log(repo_data);

          var li_colletion = document.querySelectorAll("li");

          li_colletion.forEach((li) => {
            li.innerText = "No Repo's Information to Display";
            li.style.color = "red";
          });

          repo_data.slice(0, 10).forEach(function (data, index) {
            li_colletion[index].innerText = data.html_url;
            li_colletion[index].style.color = "green";
          });
        });
    })
    .catch(function (error) {
      alert("Something went wrong");
      console.log(error);
    });
}
