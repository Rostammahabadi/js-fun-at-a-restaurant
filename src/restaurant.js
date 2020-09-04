function createRestaurant(name){
  return {
    name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}
function addMenuItem( restaurant, item ){
  if(item.type == 'lunch' && !restaurant.menus.lunch.includes(item)){
    restaurant.menus.lunch.push(item)
  } else if (item.type == 'breakfast' && !restaurant.menus.breakfast.includes(item)){
    restaurant.menus.breakfast.push(item)
  } else if( item.type == 'dinner' && !restaurant.menus.dinner.includes(item)){
    restaurant.menus.dinner.push(item)
  }
}

function removeMenuItem( restaurant, item , type){
  if(type == 'breakfast'){
    var index = restaurant.menus.breakfast.map(food=> food.name).indexOf(item)
    restaurant.menus.breakfast.splice(index, 1)
    return `No one is eating our ${item} - it has been removed from the ${type} menu!`
  } else if (type == 'lunch'){
    var index = restaurant.menus.lunch.map(food=> food.name).indexOf(item)
    restaurant.menus.lunch.splice(index, 1)
    return `No one is eating our ${item} - it has been removed from the ${type} menu!`
  } else if (type == 'dinner') {
    var index = restaurant.menus.dinner.map(food=> food.name).indexOf(item)
    restaurant.menus.dinner.splice(index, 1)
    return `No one is eating our ${item} - it has been removed from the ${type} menu!`
  } else {
    return `Sorry, we don't sell ${item}, try adding a new recipe!`
  }
}
module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
