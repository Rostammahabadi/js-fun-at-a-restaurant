function nameMenuItem( item ) {
  return `Delicious ${item}`
}
function createMenuItem( item, price, type){
  return {
    name: item,
    price,
    type
  }
}
function addIngredients( ingredient, array){
  if(!array.includes(ingredient)){
    array.push(ingredient)
  }
}
function formatPrice( price ){
  return `$${price}`
}
function decreasePrice( price ){
  return (price - (price * .10))
}
function createRecipe( title, ingredients, type ){
  return {
    title,
    ingredients,
    type: type
  }
}
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
