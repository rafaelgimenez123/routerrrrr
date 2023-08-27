//lista de productos que va a tomar itemlist.jsx
const products = [
  { id: "1", name: "Samsung Galaxy S23", price: 799, category: "phones" },
  { id: "2", name: "Samsung Galaxy S23 Pro", price: 999, category: "phones" },
  { id: "3", name: "Samsung Galaxy S23 Pro Max", price: 1099, category: "phones" },
  { id: "4", name: "Samsung Galaxy Tab Pro", price: 799, category: "tablets" },
  { id: "5", name: "Samsung Galaxy Tab Air", price: 599, category: "tablets" },
  { id: "6", name: "Samsung Galaxy Tab", price: 329, category: "tablets" },
  { id: "7", name: "Samsung Galaxy Book Air", price: 999, category: "notebooks" },
  { id: "8", name: "Samsung Galaxy Book Pro 13-inch", price: 1299, category: "notebooks" },
  { id: "9", name: "Samsung Galaxy Book Pro 16-inch", price: 2399, category: "notebooks" },
];



  // getProduct
  export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        const product = products.find((p) => p.id === id);
  
        if (product) {
          resolve(product);
        } else {
          reject("No encontramos el producto");
        }
      }, 1000);
    });
  };
  

  export const getProducts = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Si category existe filtramos por categoría
        
  
        const productsFiltered = category
          ? products.filter((product) => product.category === category)
          : products;
  
        resolve(productsFiltered);
      }, 1000);
    });
  };