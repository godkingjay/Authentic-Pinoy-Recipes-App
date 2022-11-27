import PinoyFoods from "../FoodsDB/foodsDB";
import FavFood from "../FoodsDB/favFoodDB";

export async function categoryFoods(category = "Main Course") {
  let result = PinoyFoods.filter(({ type }) => type.find((str) => str == category));
  return result;
}

export async function favoriteFoods(){
  let foods = [];
  for(let i = 0; i < FavFood.length; i++) {
    let result = PinoyFoods.filter((food) => food.id == FavFood[i].id);
    foods.push(result[0])
  }

  return(foods);
}