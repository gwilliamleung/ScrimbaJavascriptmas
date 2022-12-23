import products from "./day 22 data";

function sortProducts(data){
    return data.sort((a,b)=> a.price - b.price)
}

const listByCheapest = sortProducts(products);
for (const product of listByCheapest){
    console.log(`${product.product},${product.price}}`);
}

