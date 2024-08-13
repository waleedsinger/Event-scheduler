// index.js  
import { fetchProducts } from './modules/network.js';  
import { addToCart } from './modules/storage.js';  
import { renderProducts } from './modules/ui.js';  

async function main() {  
    const products = await fetchProducts();  
    renderProducts(products, addToCart);  
}  

document.addEventListener('DOMContentLoaded', main);