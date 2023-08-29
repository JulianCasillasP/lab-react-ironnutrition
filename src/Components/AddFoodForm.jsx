import React, { useState } from "react";
import { Divider, Input, Button } from 'antd';

function AddFoodForm({ onAddFood }) {
  const [foodData, setFoodData] = useState({
    name: "",
    image: "",
    calories: "",
    servings: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFoodData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFood(foodData);
    setFoodData({
      name: "",
      image: "",
      calories: "",
      servings: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        name="name"
        value={foodData.name}
        type="text"
        onChange={handleInputChange}
      />

      <label>Image</label>
      <Input
        name="image"
        value={foodData.image}
        type="text"
        onChange={handleInputChange}
      />

      <label>Calories</label>
      <Input
        name="calories"
        value={foodData.calories}
        type="number"
        onChange={handleInputChange}
      />

      <label>Servings</label>
      <Input
        name="servings"
        value={foodData.servings}
        type="number"
        onChange={handleInputChange}
      />

      <Button type="primary" htmlType="submit">
        Create
      </Button>
    </form>
  );
}

export default AddFoodForm;