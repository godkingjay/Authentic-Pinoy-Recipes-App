import PinoyFoods from "../FoodsDB/foodsDB";
import FavFood from "../FoodsDB/favFoodDB";

function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}

export async function categoryFoods(category = "Main Course") {
  let result = PinoyFoods.filter(({ type }) => type.find((str) => str == category));
  return result;
}

export async function favoriteFoods(){
  let foods = [];
  for(let i = 0; i < FavFood.length; i++) {
    let result = PinoyFoods.filter((food) => food.id == FavFood[i]);
    foods.push(result[0])
  }

  foods.sort(function(a, b) {
    return compareStrings(a.name, b.name);
  });

  return(foods);
}