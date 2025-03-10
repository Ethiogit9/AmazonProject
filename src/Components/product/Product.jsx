import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import style from "./product.module.css";
import { commonUrl } from "../../api/endPoint";
import Loader from "../Loading/Loader";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(products);

  useEffect(() => {
    axios.get(`${commonUrl}`).then((res) => {
      //   console.log(res.data);
      setProducts(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={style.products_container}>
          {products.map((product, index) => (
            <ProductCard
              item={product}
              key={index}
              flex={false}
              renderDesc={false}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Product;
