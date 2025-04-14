
// Reduce into single object

const products = [
    {name:'JavaScript Cookboor', price:350},
    {name:'Head First python', price:200},
    {name:'Head First Java', price:400},
    {name:'JavaScript Cookboor', price:350},
    {name:'Head First Java', price:400},
    {name:'javaScript Cookboor', price:350},
    {name:'javaScript Cookboor', price:350},
];

// convert array o object to one object using reduce

const invoice = products.reduce((acc, cur) => {

    if(acc[cur.name]){
       acc[cur.name].quantity++;
       acc[cur.name].price += cur.price
    }
    else{
        acc[cur.name] = {
            price:cur.price,
            quantity:1
        }
    }
    return acc;
}, {});

// console.log(invoice); 
// {
//     'JavaScript Cookboor': { price: 700, quantity: 2 },
//     'Head First python': { price: 200, quantity: 1 },
//     'Head First Java': { price: 800, quantity: 2 },
//     'javaScript Cookboor': { price: 700, quantity: 2 }
// }
  