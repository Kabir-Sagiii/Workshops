function createCard(products) {
  let productsSection = document.querySelector(".products");

  products.forEach(function (product) {
    let div = document.createElement("div");
    div.classList.add("card");
    div.style.boxShadow = "0 0 10px green";

    let img = document.createElement("img");
    img.src = product.image;

    img.width = "300";
    img.height = "200";

    let h2 = document.createElement("h2");
    h2.innerText = product.name.slice(0, 21);

    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    p1.innerText = `$ ${product.price}`;
    p2.innerText = product.description.slice(0, 100);

    let button = document.createElement("button");

    let cartsdata = JSON.parse(localStorage.getItem("carts"));
    let cartProduct = cartsdata.find(function (productcart) {
      return productcart.name === product.name;
    });

    if (cartProduct) {
      button.innerText = "Remove From Cart";
      button.classList.add("redButton");
    } else {
      button.innerText = "Add To Cart";
      button.classList.add("greenButton");
    }

    button.onclick = function () {
      if (button.innerText === "Add To Cart") {
        button.innerText = "Remove From Cart";
        button.classList.remove("greenButton");
        button.classList.add("redButton");
        h2.style.color = "red";
        div.style.boxShadow = "0 0 10px red";
        addToCart(product);
      } else {
        button.innerText = "Add To Cart";
        button.classList.remove("redButton");
        button.classList.add("greenButton");
        h2.style.color = "green";
        div.style.boxShadow = "0 0 10px green";
        removeFromCart(product.name);
      }
    };

    //add img,h2,p,p,button inside the div
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(button);

    productsSection.appendChild(div);
  });
}

function filterProducts(categoryName) {
  //Remove entire data(all cards) from products section element
  var productsSection = document.querySelector(".products");
  productsSection.innerText = "";

  //Access the products data from localStorage which is in string type
  var productsData = localStorage.getItem("products");

  //Convert String Type data into Object type
  productsData = JSON.parse(productsData);

  if (categoryName === "all") {
    createCard(productsData);
  } else {
    //Filter data based on categoryName
    var filteredData = productsData.filter(function (product) {
      return product.category === categoryName;
    });

    createCard(filteredData);
  }
}

function addToCart(product) {
  //Access Cart Data from LocalStorage
  var cartData = localStorage.getItem("carts");

  //Convert String type into object type
  cartData = JSON.parse(cartData);

  //Add product in the Cart Array
  cartData.push(product);

  //Convert cartArray to String type
  cartData = JSON.stringify(cartData);

  //update the data in localStorage
  localStorage.setItem("carts", cartData);
}

function removeFromCart(productName) {
  //Access Cart Data from LocalStorage
  var cartData = localStorage.getItem("carts");

  //Convert String type into object type
  cartData = JSON.parse(cartData);

  //remove the product from carts array using filter
  var filteredData = cartData.filter(function (cartProduct) {
    return cartProduct.name !== productName;
  });

  //Convert cartArray to String type
  filteredData = JSON.stringify(filteredData);

  //update the data in localStorage
  localStorage.setItem("carts", filteredData);
}
