let cart = [
  { id: 1, name: "Pen", price: 20, qty: 5, category: "stationery" },
  { id: 2, name: "Notebook", price: 100, qty: 3, category: "stationery" },
  { id: 3, name: "Mug", price: 150, qty: 1, category: "kitchen" }
];

let itemTotals = cart.map(item => item.price * item.qty);
let discountedItemTotals = cart.map(item => {
  let subtotal = item.price * item.qty;
  if (item.qty >= 3) subtotal = subtotal - (subtotal * 0.05);
  return subtotal;
});
let stationeryItems = cart.filter(item => item.category === "stationery");
let stationeryTotal = stationeryItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
let stationeryDiscount = stationeryTotal > 200 ? stationeryTotal * 0.10 : 0;
cart.forEach(item => {
  let subtotal = item.price * item.qty;
  if (item.qty >= 3) {
    console.log(`Item: ${item.name} (x${item.qty}) = ${subtotal} → discount applied`);
  } else {
    console.log(`Item: ${item.name} (x${item.qty}) = ${subtotal}`);
  }
});
console.log("---------------------------------");
let subtotal = itemTotals.reduce((a, b) => a + b, 0);
let itemDiscounts = subtotal - discountedItemTotals.reduce((a, b) => a + b, 0);
let finalTotal = subtotal - itemDiscounts - stationeryDiscount;
console.log("Subtotal:", subtotal);
console.log("Item Discounts:", itemDiscounts);
console.log("Stationery Discount:", stationeryDiscount);
console.log("Final Total:", Number(finalTotal.toFixed(2)));
