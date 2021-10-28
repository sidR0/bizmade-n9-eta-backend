import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Search = () => {
  return (
    <Form inline className="d-flex m-auto">
      <Form.Control
        type="text"
        name="q"
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="primary" className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default Search;
