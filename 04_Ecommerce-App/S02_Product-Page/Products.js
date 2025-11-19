function createCard() {
  //create a div element
  let div = document.createElement("div"); //<div>  </div>
  div.classList.add("card");
  div.classList.add("box");
  //<div class="card box box1">  </div>

  //create Image
  let img = document.createElement("img");
  img.src =
    "https://static.vecteezy.com/system/resources/thumbnails/024/656/689/small_2x/stock-foto-of-3d-modern-sofa-on-a-white-background-generative-ai-photo.jpg";
  img.width = "300";
  img.height = "200";

  //create h2
  let h2 = document.createElement("h2");
  h2.innerText = "Sofa";

  //create 2 paragraph element
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");

  p1.innerText = "$ 250";
  p2.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero molestiae aperiam omnis.`;

  //create button
  let button = document.createElement("button");
  button.innerText = "Add-To-Cart";

  //add img,h2,p,p,button inside the div
  div.appendChild(img);
  div.appendChild(h2);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(button);

  let productsSection = document.querySelector(".products");
  productsSection.appendChild(div);
  //<section> <div class="card">  </div> </section>
}
