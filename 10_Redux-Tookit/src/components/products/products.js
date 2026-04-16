import axios from "axios";
export const getProducts = async (setProducts) => {
  try {
    var res = await axios.get("https://fakestoreapi.com/products");
    if (res.data.length > 0) {
      setProducts(res.data);
    } else {
      throw Error("Something went wrong");
    }
  } catch (error) {
    alert("Something went wrong");
  }
};
