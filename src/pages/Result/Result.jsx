// import React from 'react'

import { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/product/ProductCard";
import { commonUrl } from "../../api/endPoint";
import classes from "./result.module.css";
import Loader from "../../Components/Loading/Loader";

const Result = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const { CategoryName } = useParams();

  useEffect(() => {
    axios
      .get(`${commonUrl}/category/${CategoryName}`)
      .then((res) => {
        setResult(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [CategoryName]);

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category</p>
          <hr />
          <div className={classes.product_container}>
            {result.map((product, index) => (
              <ProductCard
                key={index}
                item={product}
                flex={false}
                renderDesc={false}
              />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Result;
