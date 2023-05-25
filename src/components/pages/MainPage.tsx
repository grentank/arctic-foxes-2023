import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import axios from 'axios';
import MyForm from '../ui/MyForm';
import CardList from '../ui/CardList';
import type { BuyProductHandlerType, ProductFromApi, ProductType } from '../../types/product';
import { isCategory } from '../../types/categories';

export default function MainPage(): JSX.Element {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<ProductType[]>([]);

  //   const oneProduct: {image: string; id: string} = {
  //     image: '',
  //     id: '3',
  //   }

  useEffect(() => {
    axios<ProductFromApi[]>('https://fakestoreapi.com/products')
      .then((res) => setProducts(res.data))
      .catch(console.log);
  }, []);

  const buyProductHandler: BuyProductHandlerType = (productId) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId
          ? {
              ...product,
              rating: { ...product.rating, count: product.rating.count - 1 },
            }
          : product,
      ),
    );
    const targetProduct = products.find((product) => product.id === productId);
    if (targetProduct) setCart((prev) => [...prev, targetProduct]);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>, input: string): void => {
    e.preventDefault();

    if (isCategory(input)) {
      axios<ProductFromApi[]>(`https://fakestoreapi.com/products/category/${input}`)
        .then((res) => setProducts(res.data))
        .catch(console.log);
    }
  };

  return (
    <>
      <Row>
        <Col>
          <MyForm submitHandler={submitHandler} />
        </Col>
      </Row>
      <Row>
        <Col>
          <CardList products={products} buyProductHandler={buyProductHandler} />
        </Col>
      </Row>
    </>
  );
}
