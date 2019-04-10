import Controller from '@ember/controller';
import Shop from 'ucraftshop/models/shop'
import { empty } from '@ember/object/computed';

export default Controller.extend({
    isAddingShop: false,
    newShopName: ' ',
    
    isAddButtonDisabled: empty('newShopName'),

    actions: {
        addShop() {
            this.set('isAddingShop', true)
        },

        cancelAddShop() { 
            this.set('isAddingShop', false);
        },

        saveShop(event) {
            event.preventDefault();
            let newShop = Shop.create({ 
                name: this.newShopName 
            });
            this.model.pushObject(newShop);
            this.setProperties({
                newShopName: '',
                isAddingBand: false 
            });
        },

        editShop() {
            console.log(this.store)
            this.store.findRecord('shop.name', 0)
            .then( shopName => shopName.this.setProperties({
                newShopName: '',
                isAddingBand: false 
            }))
        },
        
        deleteShop() {
            alert("You hit delete")
        }
    }
});