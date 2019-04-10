import Route from '@ember/routing/route';
import { A } from '@ember/array';
import Shop from 'ucraftshop/models/shop'
import Products from 'ucraftshop/models/product'


export default Route.extend({
   
    model() {
        let product1 = Products.create({
            name: 'Bear',
            quantity: 2,
            price: 440
        })

        let product2 = Products.create({
            name: 'Tiger',
            quantity: 23,
            price: 4410
        })

        let product3 = Products.create({
            name: 'Light',
            quantity: 1,
            price: 4910
        })

        let BearShop = Shop.create({name: 'BearShop', products: A([product1])})
        let TigerShop = Shop.create({name: 'TigerShop', products: A([product2])})
        let StrangeShop = Shop.create({name: 'StrangeShop', products: A([product3])})

        return A([BearShop,TigerShop, StrangeShop]);
    }
});
