import { removeProduct } from "../../actions/productActions";

const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://moon-tech-server.vercel.app/product/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(removeProduct(id));
    }
  };
};

export default deleteProduct;