const products = [
  { name: "Phone", price: 15000 },
  { name: "Laptop", price: 65000 },
  { name: "Watch", price: 3000 },
  { name: "Headphones", price: 8000 },
];

products.sort((a, b) => b.price - a.price);

console.log(products);
