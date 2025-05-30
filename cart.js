const myCart = [
  { item: "Shoes", quantity: 9 },
  { item: "Bags", quantity: 2 },
  { item: "Apples", quantity: 12 },
  { item: "Plates", quantity: 14 },
  { item: "Pairs of Shorts", quantity: '5' },
];

function addItem(cart, newItem, newQuantity) {
  if (typeof newQuantity !== 'number' || newQuantity <= -1) {
        throw new Error("Invalid quantity. Must be a positive integer.");      
  }
  if ( newQuantity === 0) {
        throw new Error("Item not added.");
  }
    cart.push({ item: newItem, quanity: newQuantity }); 
    return cart;
};

function removeItem(cart, item) {
  if (typeof cart !== 'object') {
    throw new Error("Object not in cart");
  }
  return cart.filter(items => items.item !== item)
};

function getTotalItems(cart) {
  if (cart == 0){
    throw new Error("No items in cart");
  }
  return cart.reduce((sum, cart) => sum + Number(cart.quantity), 0)
};

module.exports = { 
   addItem,
   removeItem,
   getTotalItems,
   myCart
 };


