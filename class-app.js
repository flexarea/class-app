let students ={
    girls : [
        "Audrey","Lynker","Tori","Teresa","Ornella",
        "Juliette","Christa","Yvette","Happy","Cynthia","Dorcas","Allegra"
    ],
    boyz : [
        "Esdras","Johnson","karim","Devot","Freeman",
        "Pacific","Butchoan","Livingstone","Guy",
        "Divin","Ashirafu","Jonathan"
    ]
};

let place = {
    boys: {
        class : [],//5 people
        dorm:[],//1 person
        living_room: [],//2 people
        balcony: [],
        stairs: [],
        washroom:[]
    },
    
    girls:{
        class : [],//5 people
        dorm:[],//1 person
        living_room: [],//2 people
        bathroom:[]
    }
};


// arrays for girls' name
const girlClass = [];
const girlDorm = [];
const girlLiving =[];
const girlBath = [];
//array for boys' name
const boyClass =[];
const boyDorm =[];
const boyLiving =[];
const boyWash =[];
const boyStairs=[];

const go = document.getElementById("btn");
const reset = document.getElementById("rst");


const boyArray =[];
let fem = students.girls;
let masc = students.boyz;

//main function
go.addEventListener("click",clean_app);
//refresh page function
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reset.addEventListener("click", reload, false);

//main function for both girls and boys
function clean_app(){
    main_f();
    main_m();
};

//root function girls
function main_f(){
    classroom(4,fem,);
    dormG(3,fem);
    LivingRoom(3,fem);
    bathroom();   
};
//root function boys
function main_m(){
     classB(4,masc);
     roomB(3,masc);
     livB(2,masc);
     washB(1,masc);
     stairs(1,masc);
     balc(1,masc);
     console.log(masc);
};


//living room main function
//function (random names for girls and boys array)
//count is the maximum length we want in the array
 

    function classroom (count, arrF){
        let counterC = 0; 
        while(counterC < count){
           
          let randF = arrF[Math.floor(Math.random() * arrF.length)];
          if(!girlClass.some(an => an === randF)){
            girlClass.push(randF);
            counterC++;
          } 

          }
          fem = fem.filter(val => !girlClass.includes(val));
          place.girls.class = [...girlClass];

        document.getElementById("x").innerHTML=`class : [${place.girls.class}]`;
          
         
        console.log(place.girls.class);
      };

      function dormG (count, arrF){
        let counterD = 0;
	    let counterL = 0;
	    let counterB = 0;
        while(counterD < count){
           
          let randF = arrF[Math.floor(Math.random() * arrF.length)];
          if(!girlDorm.some(an => an === randF)){
            girlDorm.push(randF);
            counterD++;
          } 

          }
          fem = fem.filter(val => !girlDorm.includes(val));
          place.girls.dorm = [...girlDorm];
          document.getElementById("y").innerHTML=`dorm : [${place.girls.dorm}]`;
        console.log(place.girls.dorm);
      };
      function LivingRoom (count, arrF){
	    let counterL = 0;
	    let counterB = 0;
        while(counterL < count){
           
          let randF = arrF[Math.floor(Math.random() * arrF.length)];
          if(!girlLiving.some(an => an === randF)){
            girlLiving.push(randF);
            counterL++;
          } 

          }
          fem = fem.filter(val => !girlLiving.includes(val));
          place.girls.living_room = [...girlLiving];
          document.getElementById("z").innerHTML=`living room : [${place.girls.living_room}]`;
        console.log(place.girls.living_room);
      };
  
      function bathroom (){
          place.girls.bathroom = [...fem];
          console.log(place.girls.bathroom);
          document.getElementById("b").innerHTML=`bathroom  : [${place.girls.bathroom}]`;
      };
      
    //   main_f();
      console.log(fem.length);


//----------------------------- ---------------------------------------------------------------------


      //boys function
      function classB (count, arrF){
        let counterC = 0; 
        while(counterC < count){
           
          let randF = arrF[Math.floor(Math.random() * arrF.length)];
          if(!boyClass.some(an => an === randF)){
            boyClass.push(randF);
            counterC++;
          } 

          }
          masc = masc.filter(val => !boyClass.includes(val));
          place.boys.class = [...boyClass];

        document.getElementById("bc").innerHTML=`class : [${place.boys.class}]`;
          
         
        console.log(place.boys.class);
      };

      function roomB (count, arrF){
        let counterD = 0;
        while(counterD < count){
           
          let randF = arrF[Math.floor(Math.random() * arrF.length)];
          if(!boyDorm.some(an => an === randF)){
            boyDorm.push(randF);
            counterD++;
          } 

          }
          masc = masc.filter(val => !boyDorm.includes(val));
          place.boys.dorm = [...boyDorm];
          document.getElementById("bd").innerHTML=`dorm : [${place.boys.dorm}]`;
        console.log(place.boys.dorm);
      };
      function livB (count, arrF){
	    let counterL = 0;
        while(counterL < count){
           
          let randF = arrF[Math.floor(Math.random() * arrF.length)];
          if(!boyLiving.some(an => an === randF)){
            boyLiving.push(randF);
            counterL++;
          } 

          }
          masc = masc.filter(val => !boyLiving.includes(val));
          place.boys.living_room = [...boyLiving];
          document.getElementById("bl").innerHTML=`living room : [${place.boys.living_room}]`;
        console.log(place.boys.living_room);
      };
      function washB (count, arrF){
	    let counterL = 0;
	    let counterB = 0;
        while(counterL < count){
           
          let randF = arrF[Math.floor(Math.random() * arrF.length)];
          if(!boyWash.some(an => an === randF)){
            boyWash.push(randF);
            counterL++;
          } 

          }
          masc = masc.filter(val => !boyWash.includes(val));
          place.boys.washroom = [...boyWash];
          document.getElementById("bw").innerHTML=`washroom : [${place.boys.washroom}]`;
        console.log(place.boys.washroom);
      };
      function stairs (count, arrF){
	    let counterL = 0;
        while(counterL < count){
           
          let randF = arrF[Math.floor(Math.random() * arrF.length)];
          if(!boyStairs.some(an => an === randF)){
            boyStairs.push(randF);
            counterL++;
          } 

          }
          masc = masc.filter(val => !boyStairs.includes(val));
          place.boys.stairs = [...boyStairs];
          document.getElementById("bs").innerHTML=`stairs : [${place.boys.stairs}]`;
        console.log(place.boys.stairs);
      };
      
  
      function balc (){
          place.boys.balcony = [...masc];
          console.log(place.boys.balcony);
          document.getElementById("bb").innerHTML=`balcony  : [${place.boys.balcony}]`;
      };
      
    //   main_f();
 







