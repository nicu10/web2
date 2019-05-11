
var store = new Vue({
  el: '#store',
  data: {
    orderSum: 0,
    products: [
      {
        id: 1,
        name: 'BMW',
        price: 3000,
        anul: '1995',
        telefon:'+373 7020739',
          nume:'Andrei'
      },
      {
        id: 2,
        name: 'Lada',
        price: 3000,
        anul: '1995',
        telefon:'+373 7020739',
          nume:'Andrei'
      }
    ]
  },
  methods: {
    addToCart(product){
      this.orderSum = parseFloat(this.orderSum + product.price);    
      this.products[product.id - 1].quantity++;
    },
    removeFromcart(product){
      var sumToRemove = this.products[product.id - 1].quantity * this.products[product.id - 1].price;
      this.orderSum -= sumToRemove;
      this.products[product.id - 1].quantity = 0;
    }
  }
})