import './App.css';
import React, { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import Search from './Components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foods);

  const addFood = (newFood) => {
    setFoodList((prevFoodList) => [...prevFoodList, newFood]);
  };

  const handleSearch = (searchTerm) => {
    const filteredFoods = foodList.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFoodList(filteredFoods); 
  };
  
  const handleDelete = (foodToDelete) => {
    const updatedFoodList = foodList.filter((food) => food !== foodToDelete);
    setFoodList(updatedFoodList);
    setFilteredFoodList(updatedFoodList);
  };


  return (
    <div>
      <AddFoodForm onAddFood={addFood} />
      <Search onSearch={handleSearch} />
      <Row gutter={[16, 16]}>
      {filteredFoodList.map((food, index) => (
          <Col span={8} key={index}>
            <FoodBox food={food} onDelete={handleDelete} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default App;