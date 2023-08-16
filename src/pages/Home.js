import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";

import { Row, Col } from "react-bootstrap";
import Product from '../components/Product/Product';


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const response = await axios.get('http://localhost:8000/api/products');
            setProducts(response.data);
        }
        getProduct();
    }, []);

    return (
        <div>
            <h1>محصولات</h1>
            <Row>
                {products.map((item) => {
                    return (
                        <Col key={item._id} sm={12} md={6} lg={4}>
                            <Product product={item} />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default Home;
