function takeOrder(order, orders){
  if(orders.length!=3){
    orders.push(order)
  }
}
function refundOrder( quantity, orders){
  orders.shift()
}
function listItems( orders ){
  var titles = orders.map(order => order.item)
  return titles.join(", ")
}

function searchOrder( orders, item){
  var mapped = orders.map(order => order.item)
  return mapped.includes(item)
}
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
// focus on experiences and how i problem solve
// algorithmic based questions
// iterative
// mention performant
// recursive
// adaptable
// def check_groups(string_to_check)
//    #if no parens, true
//    # position matters
//    # split_array = ["(", "t", "e", "s", "t", ")"]
//    #["(","(",")",")"]
//    #["(", "("], [")",")"]
// end
