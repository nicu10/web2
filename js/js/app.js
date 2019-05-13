const car=(id,name,model,an,phone,image,pret,prnume,probeg,detail,colorr) =>({id,name,model,an,phone,image,pret,prnume,probeg,detail,colorr})
const log =(text,type,date = new Date()) =>({text,type,date})
const cars=[
 car('1','BMW','x5','2006','+373 79 20 30 20','img/1.png',6000,'Andrei','3000','asvgdgasdguaghsdashdhjadjhbdsas','alb'),
     car('2','Lada','7','2006','+373 79 20 30 20','img/2.png',5000,'Andrei','3000','asvgdgasdguaghsdashdhjadjhbdsas','negru'),
     car('3','Toiota','astra','1995','+373 79 30 30 20','img/3.png',8000,'Vadim','15356','asvgdgasdguaghsdashdhjadjhbdsas','gray'),
     car('4','Toiota','mini','1999','+373 79 30 30 20','img/4.jpg',7000,'Vadim','15356','asvgdgasdguaghsdashdhjadjhbdsas','gray'),
    car('5','Ford','racheta','2008','+373 79 20 30 20','img/2.png',5000,'Andrei','3000','asvgdgasdguaghsdashdhjadjhbdsas','negru'),
    car('6','Honda','324','1995','+373 79 30 30 20','img/4.jpg',7000,'Anton','15356','asvgdgasdguaghsdashdhjadjhbdsas','gray'),
     car('6','Honda','324','1995','+373 79 30 30 20','img/4.jpg',7000,'Anton','15356','asvgdgasdguaghsdashdhjadjhbdsas','gray'),
     car('4','Toiota','mini','1999','+373 79 30 30 20','img/4.jpg',7000,'Vadim','15356','asvgdgasdguaghsdashdhjadjhbdsas','gray'),
     car('5','Opel','terminator','2005','+373 79 20 30 20','img/2.png',5000,'Andrei','3000','asvgdgasdguaghsdashdhjadjhbdsas','negru'),
]
new Vue({
    el:'#app',
    data:{
        suma:null,
        selectedColor:null,
        selectedMotor:null,
        cars:cars,
        car:cars[0],
        logs:[],
        selectedCarIndex:0,
        phoneVisibility:false,
        seartch:'',
        orderSum: 0,
        modalv:false,
        colorList: [
      {
        name: 'Red',price: 75
      },
             {
        name: 'Blue',price: 75
      },
             {
        name: 'white', price: 60
      }
            ],
         motorList: [
      {
        name: '1.2',price: 75
      },
             {
        name: '1.4',price: 75
      },
             {
        name: '1.6', price: 60
      }
            ]
    },
    methods:{
        selectCar: function(index){
            console.log('click',index)
            this.car = cars[index]
            this.selectedCarIndex = index
        },
       buyCar(){
           this.modalv = false
           this.logs.push(
            log('Cumarata cu succes')   
           )
       },
     cancelOrder(){
         this.modalv = false;
          this.logs.push(
            log('Anularea comanda')   
           )
     } 
        
    },
    computed:{
       phoneBtnText(){
           return this.phoneVisibility ? 'Ascunde telefonula' :'Arata telefonul'
       },
    filteredCars(){
          return this.cars.filter(car => {
            return car.name.indexOf(this.seartch) > -1 || car.model.indexOf(this.seartch) > -1
        })  
    }}
})