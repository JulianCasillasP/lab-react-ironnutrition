import React from "react";
import { Card, Col, Button } from 'antd';


function FoodBox({ food, onDelete }) {
        const handleDelete = () => {
          onDelete(food); 
        };
  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt={food.name} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories} * {food.serving} </b> kcal
        </p>
        <Button type="primary"  onClick={handleDelete}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
