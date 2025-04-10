import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/slices/productSlices";
import Product from "./Product";
function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", flexDirection: "column", }}>
    <h2>PRODUCTS</h2>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", flexDirection: "row", flexWrap: "wrap" }}>
      {
        products && products.map((product) => (
          <Product key={product.id} product={product} />
        ))

      }</div>;
  </div>
}

export default ProductList;
