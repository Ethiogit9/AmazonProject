// import React from 'react'

import { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { commonUrl } from "../../api/endPoint";
import ProductCard from "../../Components/product/ProductCard";
import Loader from "../../Components/Loading/Loader";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams(); // 1, 2, 3

  useEffect(() => {
    axios
      .get(`${commonUrl}/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [productId]);
  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <ProductCard
          renderAdd={true}
          item={product}
          renderDesc={true}
          flex={true}
        />
      )}
    </Layout>
  );
};

export default ProductDetail;
