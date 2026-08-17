const nerd = [1, 2, 3, 4]
const power = nerd.reduce( function (accumulator, currentValue) { 
    console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
    return accumulator + currentValue
}, 0 )
console.log(power);

// same code in arrow function 

const artic = nerd.reduce( (accumulator, currentValue) => 
    {return accumulator + currentValue}, 0 )
console.log(`arrow function code: `,artic);


const addToCart = [
    {itemName: "js cource",
        price: 499
    },
    {itemName: "python cource",
        price: 999
    },
    {itemName: "android dev cource",
        price: 5999
    },
    {itemName: "data science cource",
        price: 12999
    },
    {itemName: "ml cource",
        price: 8999
    }
]

const priceToPay = addToCart.reduce( (accumulator, item) => 
    {return accumulator + item.price}, 0 )

console.log(`Total Price to Pay`,priceToPay);