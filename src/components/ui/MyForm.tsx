import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';

type MyFormProps = {
  submitHandler: (e: React.FormEvent<HTMLFormElement>, input: string) => void;
};

export default function MyForm({ submitHandler }: MyFormProps): JSX.Element {
  const [input, setInput] = useState('');

  //   const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => setInput(e.target.value);
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => setInput(e.target.value);
  return (
    <Form onSubmit={(e) => submitHandler(e, input)}>
      <FormGroup row>
        <Label for="exCat" sm={2}>
          Category
        </Label>
        <Col sm={8}>
          <Input
            value={input}
            onChange={changeHandler}
            id="exCat"
            name="category"
            placeholder="jewelery or men's clothing"
            type="text"
          />
        </Col>
        <Col sm={2}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}
