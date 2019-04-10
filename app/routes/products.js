import Route from '@ember/routing/route';


export default Route.extend({
   
    model() {
        return [{
            name: "product name",
            quantity: 12,
            price: 15
        },
        {
            name: "Another product",
            quantity: 112,
            price: 1
        },
        {
            name: "Lux product",
            quantity: 7,
            price: 999
        },
        {
            name: "Simple product",
            quantity: 73,
            price: 99
        }]
    }
});
