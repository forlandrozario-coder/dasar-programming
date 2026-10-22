function analyzeInventory(products) {
  let totalValue = 0;
  const lowStockNames = [];

  for (const product of products) {
    totalValue += product.price * product.stock;
    
    if (product.stock < 5) {
      lowStockNames.push(product.name);
    }
  }

  return {
    totalValue: totalValue,
    lowStockProducts: lowStockNames
  };
}


const inventory = [
  { name: "Laptop", price: 1000, stock: 10 },
  { name: "Mouse", price: 25, stock: 3 },
  { name: "Keyboard", price: 75, stock: 2 },
  { name: "Monitor", price: 200, stock: 6 }
];
console.log(analyzeInventory(inventory)); 
