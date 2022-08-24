import React from "react";
import { currencyFormatter } from "../utils";
import { Card } from "react-bootstrap";

const BudgetCard = ({ name, amount, max }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <div>{name}</div>
          <div>
            {currencyFormatter.format(amount)} / {currencyFormatter.format(max)}
          </div>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default BudgetCard;
