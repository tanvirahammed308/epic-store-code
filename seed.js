const Stripe = require('stripe');
const projucts = require('./products');

const stripe=Stripe (process.env.SECRETE_KEY);

(async ()=>{
for(const product of projucts){
   const stripeProduct= await stripe.products.create({
        name: product.name,
        default_price_data:{
            currency:product.currency,
            unit_amount_decimal:product.price
        },
        images:[
            product.image
        ]
      });
      console.log(stripeProduct.name, ":",stripeProduct.id)
}
})()