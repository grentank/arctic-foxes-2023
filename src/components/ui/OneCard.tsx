import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import type { BuyProductHandlerType, ProductType } from '../../types/product';

type OneCardProps = {
  product: ProductType;
  buyProductHandler: BuyProductHandlerType;
};

export default function OneCard({ product, buyProductHandler }: OneCardProps): JSX.Element {
  return (
    <Card
      style={{
        width: '18rem',
      }}
    >
      <img alt="Sample" src={product.image} />
      <CardBody>
        <CardTitle tag="h5">{product.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {product.price}
        </CardSubtitle>
        <CardText>{product.description}</CardText>
        <Button onClick={() => buyProductHandler(product.id)}>{product.rating.count} left</Button>
      </CardBody>
    </Card>
  );
}
