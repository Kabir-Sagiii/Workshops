import "./Products.css";
import { useState, useEffect } from "react";
import { getProducts } from "./products.js";

function Products() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    getProducts(setProducts);
  }, []);
  return (
    <div className="products">
      <div id="ad-bg-images">
        <h1>Little Dreamers, Big Adventures!</h1>
        <p>
          A colorful and cheerful banner filled with smiling children, bright
          balloons, rainbows, stars, and playful animals, inspiring imagination,
          friendship, and endless fun.A vibrant kids-themed banner featuring
          crayons, paint splashes, happy cartoon characters, and a sunny sky
          background that sparks creativity and excitement.
        </p>
      </div>

      {products ? (
        <div className="products-data">
          {products &&
            products.map((product) => {
              return (
                <div className="card" key={product.id}>
                  <img src={product.image} width={"100%"} height={230} alt="" />
                  <h3>{product.title.slice(0, 21)}</h3>
                  <p>$ {product.price}</p>
                  <p>{product.description.slice(0, 80)}</p>
                  <button>Product Details</button>
                </div>
              );
            })}
        </div>
      ) : (
        <h1 id="noProducts">No Products to Display</h1>
      )}
    </div>
  );
}

export default Products;
