import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        let shops = this.modelFor('shops');
        return shops.findBy('slug', params.slug);
    },

    actions:{
        didTransition() {
            let shop = this.modelFor('shops.products');
            document.title = shop.name; 
        }
    }
});
