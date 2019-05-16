const car=(id,name,model,an,phone,image,pret,prnume,probeg,detail,colorr) =>({id,name,model,an,phone,image,pret,prnume,probeg,detail,colorr})
const log =(text, type, date = new Date()) =>({text, type, date})
const cars=[
 car('1','BMW','x5','2006','+373 79 20 30 20','img/1.png',6000,'Andrei','3000','masina se afla intr-o stare buna,motoru lucreaza  foarte bine.','alb'),
    car('2','Opel','senator','2006','+373 79 20 30 20','img/4.jpg',5000,'Andrei','3000','masina se afla intr-o stare buna,motoru lucreaza  foarte bine.','negru'),
     car('3','Toiota','astra','1995','+373 79 30 30 20','img/3.png',8000,'Vadim','15356','masina se afla intr-o stare buna,motoru lucreaza  foarte bine.','gray'),
     car('4','Toiota','mini','1999','+373 79 30 30 20','img/4.jpg',7000,'Vadim','15356','masina se afla intr-o stare buna,motoru lucreaza  foarte bine.','gray'),
    car('5','Ford','racheta','2008','+373 79 20 30 20','img/2.png',5000,'Andrei','3000','masina se afla intr-o stare buna,motoru lucreaza  foarte bine.','negru'),
    car('6','Honda','324','1995','+373 79 30 30 20','img/4.jpg',7000,'Anton','15356','masina se afla intr-o stare buna,motoru lucreaza  foarte bine.','gray'),
     car('6','Honda','324','1995','+373 79 30 30 20','img/4.jpg',7000,'Anton','15356','masina se afla intr-o stare buna,motoru lucreaza  foarte bine.','gray'),
     car('4','Toiota','mini','1999','+373 79 30 30 20','img/4.jpg',7000,'Vadim','15356','masina se afla intr-o stare buna,motoru lucreaza  foarte bine.','gray'),
     car('5','Opel','terminator','2005','+373 79 20 30 20','img/2.png',5000,'Andrei','3000','masina se afla intr-o stare buna,motoru lucreaza  foarte bine.','negru'),
     car('6','Lada','7','2006','+373 79 20 30 20','img/2.png',5000,'Andrei','3000','masina se afla intr-o stare buna,motoru lucreaza  foarte bine.','negru'),
    car('6','Lada','7','2006','+373 79 20 30 20','img/2.png',5000,'Andrei','3000','masina se afla intr-o stare buna,motoru lucreaza  foarte bine.','negru'),
]
new Vue({
    el:'#app',
    data:{
        cars:cars,
        car:cars[0],
        logs:[],
        selectedCarIndex:0,
        phoneVisibility:false,
        seartch:'',
        modalv:false,
    selectedColor: null,
    selectedMotor: null,
	selectedGlas: null,
    orderPrice: 0, 
    orderPrice2:0 ,
    carColor: [
      {
        name: 'red',
        price: 100
      },
      {
        name: 'blue',
        price: 200
      },
       {
        name: 'Black',
        price: 150
      },
       {
        name: 'White',
        price: 250
      }
    ],
    carMotor: [
      {
        name: '1.2',
        price: 100
      },
      {
        name: '1.4',
        price: 150
      },
       {
        name: '1.6',
        price: 200
      },
       {
        name: '2.0',
        price: 250
      }],
	  carGlas: [
      {
        name: 'tindet',
        price: 300
      },
      {
        name: 'simple',
        price: 50
      },
       {
        name: 'bulletproof',
        price: 500
      },
       {
        name: 'bulletproof+tindet',
        price: 800
      }
    ]
    },
    methods:{
        selectCar: function(index){
            console.log('click',index)
            this.car = cars[index]
            this.selectedCarIndex = index
        },
        remove(){
	  this.orderPrice= null;
	  this.selectedColor = null;
	  this.selectedMotor = null;
	  this.selectedGlas = null;
    },
         calcul(){
      this.orderPrice = (this.selectedCar !== null ? this.selectedCar.price : 0) + 
      (this.selectedColor !== null ? this.selectedColor.price : 0) + 
        (this.selectedMotor !== null ? this.selectedMotor.price : 0) + 
        (this.selectedGlas !== null ? this.selectedGlas.price : 0);
  },
         calcul2(){
      this.orderPrice2 = (this.orderPrice);
  },
       buyCar(){
           this.modalv = false
           this.logs.push(
            log(`Cumparat cu succes: ${this.car.name} - ${this.car.model}`, 'ok')   
           )
       },
     cancelOrder(){
         this.modalv = false;
          this.logs.push(
            log(`Anularea comanda: ${this.car.name} - ${this.car.model}`, 'can')   
           )
     },
        calcul(){
      this.orderPrice = (this.selectedColor !== null ? this.selectedColor.price : 0) + 
        (this.selectedMotor !== null ? this.selectedMotor.price : 0) + 
        (this.selectedGlas !== null ? this.selectedGlas.price : 0);
  },
         calcul2(){
      this.orderPrice2 = this.orderPrice + this.car.pret;
  },
        
        
    },
    computed:{
       phoneBtnText(){
           return this.phoneVisibility ? 'Ascunde telefonula' :'Arata telefonul'
       },
    filteredCars(){
          return this.cars.filter(car => {
            return car.name.indexOf(this.seartch) > -1 || car.model.indexOf(this.seartch) > -1
        })  
    }},
    filters:{
    date(value){
        return value.toLocaleString()
    }
}
})