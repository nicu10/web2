const car=(id,name,model,an,phone,image,pret,prnume,probeg,detail) =>({id,name,model,an,phone,image,pret,prnume,probeg,detail})
const cars=[
 car('1','BMW','x5','2006','+373 79 20 30 20','img/1.png',6000,'Andrei','3000','asvgdgasdguaghsdashdhjadjhbdsas'),
     car('2','Lada','7','2006','+373 79 20 30 20','img/2.png',6000,'Andrei','3000','asvgdgasdguaghsdashdhjadjhbdsas'), 
]
new Vue({
    el:'#app',
    data:{
        cars:cars,
        car:cars[0],
        selectedCarIndex:0,
        phoneVisibility:false,
        seartch:''
    },
    methods:{
        selectCar: function(index){
            console.log('click',index)
            this.car = cars[index]
            this.selectedCarIndex = index
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