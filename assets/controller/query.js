import PinoyFoods from "../FoodsDB/foodsDB";
import FavFood from "../FoodsDB/favFoodDB";
import Ingredients from "../FoodsDB/ingedientDB";
import foodCategory from "../FoodsDB/foodCategories";

function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return (a < b) ? -1 : (a > b) ? 1 : 0;
}

export async function categoryFoods(category = "Main Course") {
  let result = PinoyFoods.filter(({ type }) => type.find((str) => str == category));
  return result;
}

export async function discoverFoodCategories(){
  let result = [];
  for(let i = 1; i < foodCategory.length; i++){
    let foods = PinoyFoods.filter(({ type }) => type.find((str) => str == foodCategory[i].name));
    if(foods.length >= 5) result.push(foodCategory[i]);
  }
  return(result);
}

export async function discoverFoods(category = "Main Course") {
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

export async function foodIngredient(food = []){
  let ingredients = [];
  for(let i = 0; i < food.length; i++) {
    let result = Ingredients.filter((ingredient) => ingredient.name == food[i].image);
    if(result.length > 0){
      ingredients.push(result[0]);
    } else {
      ingredients.push(null);
    }
  }

  return(ingredients);
}