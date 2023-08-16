import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Col, Row, Image, ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';



const ProductDetail = () => {
  const params = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
      const getDetailProduct = async () => {
        const response = await axios.get(`http://localhost:8000/api/products/${params.id}`);
        setProduct(response.data);
      }
      getDetailProduct();
  }, [params.id]);

  return (
    <div>
      <Link to="/" className='btn btn-light my-3'>
        باز گشت به صفحه اصلی
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              {product.price}
            </ListGroup.Item>

            <ListGroup.Item>
              {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Button className='btn-block' type='button'>
                افزودن به سبد خرید
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default ProductDetail;
