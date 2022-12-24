/* From Day 3 forward I will not be sharing the prompt as it is only for paid members of Scrimba
please sign up for Scrimba to see the prompts

https://scrimba.com/learn/javascriptmas

*/

import products from "./day 23 data";

function sortProducts(data){
    return data.sort((a,b)=> a.price - b.price)
}

const listByCheapest = sortProducts(products);
for (const product of listByCheapest){
    console.log(`${product.product},${product.price}}`);
}

