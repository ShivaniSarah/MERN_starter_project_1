//  This will work on on browser. Do Inspect. linked with html file 

import data from './food.json' assert {type:'json'};

// list all the items
// let a= JSON.parse(JSON.stringify(data))
console.log(data)
// console.log(a)

// list all the food items

let a = data.map((element)=>{
return element.foodname;

})
console.log(a);

// list all the food items with category vegetables
let b=data.filter((element)=>{
return element.category==='Vegetable';
}).map((element)=>{
return {id:element.id,cat:element.category};
})
console.log(b)

// list all the food items with category fruit

let c=data.filter((element)=>{
      return element.category==='Fruit';
      }).map((element)=>{
      return {id:element.id,cat:element.category};
      })
      console.log(c)

// list all the food items with category protien
let d=data.filter((element)=>{
      return element.category==='Protein';
      }).map((element)=>{
      return {id:element.id,cat:element.category};
      })
      console.log(d)

// list all the food items with category nuts

let e=data.filter((element)=>{
      return element.category==='Nuts';
      }).map((element)=>{
      return {id:element.id,cat:element.category};
      })
      console.log(e)

//  list all the food items with category grains

let f=data.filter((element)=>{
      return element.category==='Grain';
      }).map((element)=>{
      return {id:element.id,cat:element.category};
      })
      console.log(f)

// list all the food items with category dairy

let g=data.filter((element)=>{
      return element.category==='Dairy';
      }).map((element)=>{
      return {id:element.id,cat:element.category};
      })
      console.log(g)

// list all the food items with calorie above 100

let h=data.filter((element)=>{

return element.calorie>100;

})
console.log(h)

//  list all the food items with calorie below 100
let i=data.filter((element)=>{

      return element.calorie<100;
      
      })
console.log(i)

// list all the food items with highest protien content to lowest
// let k=j.sort((a, b) => a.prot - b.prot);

let j=data.map((element)=>{
      return {id:element.id, prot:element.protiens};
   })
   console.log(j)
let k=j.sort((a,b)=> {  return b.prot - a.prot})
console.log(k)

// list all the food items with lowest cab content to highest
console.log('Done')
let l=data.map((element)=>{
      return {id:element.id, cab:element.cab};
   })
   console.log(l)
let m=l.sort((a,b)=> ( a.cab - b.cab))
console.log(m)





