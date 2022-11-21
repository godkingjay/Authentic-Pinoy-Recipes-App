import PinoyFoods from "../FoodsDB/foodsDB";

export async function categoryFoods(category = "Main Course") {
  let result = PinoyFoods.filter(({ type }) => type.find((str) => str == category));
  console.log(result);
  return result;
}