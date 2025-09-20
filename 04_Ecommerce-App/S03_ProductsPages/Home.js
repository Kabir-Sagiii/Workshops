function addAnimationToMainSection() {
  var main = document.querySelector("main");
  var h1DomElement = document.getElementById("title");

  setInterval(function () {
    if (h1DomElement.innerText === "Electronic Products") {
      h1DomElement.innerText = "Mens Clothing Product";
      h1DomElement.style.color = "green";
      main.style.background = `linear-gradient(45deg,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("https://img.freepik.com/premium-photo/beautiful-men-fashion-wooden-background_756748-44760.jpg")`;
    } else if (h1DomElement.innerText === "Mens Clothing Product") {
      h1DomElement.innerText = "Kid's Wearing";
      h1DomElement.style.color = "coral";
      main.style.background = `linear-gradient(45deg,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("https://th.bing.com/th/id/R.2a37d4c2b8d76e0d848d5c78ca639557?rik=oWXF9EYIhGFlOQ&riu=http%3a%2f%2fwww.sugarkids.es%2fblog%2fwp-content%2fuploads%2f2017%2f08%2fupload-a266be10-68ae-11e7-b60b-a34c8b6e5d7a-480x332.jpg&ehk=C3Qa7uiQIEwWfJAoAn430bNYiAayiW%2fwl%2bKfbI09IAQ%3d&risl=&pid=ImgRaw&r=0")`;
      main.style.backgroundRepeat = "no-repeat";
      main.style.backgroundPosition = "center";
      main.style.backgroundSize = "100% 100%";
    } else if (h1DomElement.innerText === "Kid's Wearing") {
      h1DomElement.innerText = "Women's Trending Products";
      h1DomElement.style.color = "pink";

      main.style.background = `linear-gradient(45deg,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("https://tse4.mm.bing.net/th/id/OIP.GLMEBDLz_dflWqsYBi04vAHaE7?pid=ImgDet&w=178&h=118&c=7&dpr=1.5&o=7&rm=3")`;
      main.style.backgroundRepeat = "no-repeat";
      main.style.backgroundPosition = "center";
      main.style.backgroundSize = "100% 100%";
    } else {
      h1DomElement.innerText = "Electronic Products";
      h1DomElement.style.color = "yellow";
      main.style.background = `linear-gradient(45deg,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("https://thumbs.dreamstime.com/z/flat-lay-photo-office-table-laptop-computer-notebook-digital-tablet-mobile-phone-modern-two-tone-background-pencil-103808696.jpg")`;
      main.style.backgroundRepeat = "no-repeat";
      main.style.backgroundPosition = "center";
      main.style.backgroundSize = "100% 100%";
    }
  }, 3000);
}
