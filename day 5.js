import products from "./day 5 data";

/* From Day 3 forward I will not be sharing the prompt as it is only for paid members of Scrimba
please sign up for Scrimba to see the prompts

https://scrimba.com/learn/javascriptmas

*/

function getSaleItems(data){
    return data
        .filter(product => product.type === "sweet")
        .map(product => ({item: product.item, price: product.price}));
};

const shoppingCart = getSaleItems(products);
console.log(shoppingCart)
