// ui.js  
export function createProductCard(product, addToCartCallback) {  
    const card = document.createElement('div');  
    card.className = 'bg-black p-4 rounded-lg shadow-md';  
    
    const title = document.createElement('h2');  
    title.className = 'text-lg text-white font-bold';  
    title.textContent = product.title;  

    const price = document.createElement('p');  
    price.className = 'text-red-600';  
    price.textContent = `$${product.price}`;  

    const image = document.createElement('img');  
    image.className = 'w-full h-48 object-cover rounded';  
    image.src = product.image;  

    const button = document.createElement('button');  
    button.className = 'mt-2 bg-blue-500 text-white px-4 py-2 rounded';  
    button.textContent = 'Add to Cart';  
    button.onclick = () => addToCartCallback(product);  

    card.appendChild(image);  
    card.appendChild(title);  
    card.appendChild(price);  
    card.appendChild(button);  
    
    return card;  
}  

export function renderProducts(products, addToCartCallback) {  
    const productContainer = document.getElementById('product-container');  
    productContainer.innerHTML = '';  

    products.forEach(product => {  
        const productCard = createProductCard(product, addToCartCallback);  
        productContainer.appendChild(productCard);  
    });  
}