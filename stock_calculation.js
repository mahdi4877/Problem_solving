function getTotalStock(products) {
  return products.reduce((total, item) => total + item.stock, 0);
}

const inventory = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 12 },
  { name: "Mouse", stock: 25 },
];

console.log(getTotalStock(inventory));
