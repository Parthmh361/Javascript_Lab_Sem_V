let products = [
{ id: 1, name: "Pen", price: 20, category: "stationery" },
{ id: 2, name: "Mug", price: 150, category: "kitchen" },
{ id: 3, name: "Notebook", price: 80, category: "stationery" },
{ id: 4, name: "Marker", price: 50, category: "stationery" }
];
let totalPrice = products.reduce((sum, item) => sum + item.name+"", "");
console.log(totalPrice);