import EmberObject, { computed } from '@ember/object'; 
import { dasherize } from '@ember/string';

export default EmberObject.extend({ 
    name: '',

    init() { 
        this._super(...arguments);
        
        if (!this.products) {
            this.set('products', []);
      }
  },
    
    slug: computed('name', function() { 
        return dasherize(this.name);
    })
});