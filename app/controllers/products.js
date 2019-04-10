import Controller from '@ember/controller';
import Product from 'ucraftshop/models/product'
import { empty } from '@ember/object/computed';

export default Controller.extend({
    isAddingProduct: false,
    newProductName: ' ',
    quantity: 0,
    price: 0,
    
    isAddButtonDisabled: empty('newProductName'),

    actions: {
        addProduct() {
            this.set('isAddingProduct', true)
        },

        cancelAddProduct() { 
            this.set('isAddingProduct', false);
        },

        saveProduct(event) {
            event.preventDefault();
            let newProduct = Product.create({ name: this.newProductName });
            this.model.pushObject(newProduct);
            this.setProperties({
                newProductName:'',
                quantity: 0,
                price: 0,
                isAddingProduct: false,
            });
        },

        editProduct() {
            alert("You hit EDIT")
        },
        
        deleteProduct() {
            alert("You hit delete")
        }
    }
});