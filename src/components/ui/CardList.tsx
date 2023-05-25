import React from 'react';
import { Col, Row } from 'reactstrap';
import type { BuyProductHandlerType, ProductType } from '../../types/product';
import OneCard from './OneCard';

type CardListProps = {
  products: ProductType[];
  buyProductHandler: BuyProductHandlerType;
};

export default function CardList({ products, buyProductHandler }: CardListProps): JSX.Element {
  return (
    <Row>
      {products.map((product) => (
        <Col xs={4} key={product.id}>
          <OneCard product={product} buyProductHandler={buyProductHandler} />
        </Col>
      ))}
    </Row>
  );
}
