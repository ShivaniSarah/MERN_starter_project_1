// this works on node server so on terminal do : node script1.js <Enter>

// Read the JSON data from the food.json file
const foodData = require('./food.json');
let a=function listFood(food1=''){
  if(food1.length>0){
    return foodData.filter((food) => food.category === food1)
  }
  else{
    return foodData
  }
}

// console.log(a('Protein'))
// console.log(a('Nuts'))
// console.log(a(''))



let b=function sortCalorie(condition){
let calorie = 100;
  if(condition==='asec'){
    return foodData.filter((food) => food.calorie < calorie);
  }
  else if(condition==="desc"){
    return foodData.filter((food) => food.calorie > calorie)
  }
}

// console.log(b('asec'))
// console.log(b('desc'))

function sort(type){
  if(type==="protein"){
    return foodData.sort((a, b) => b.protiens - a.protiens).map(elem=> elem.id)
  }
  else if(type==="carb"){
    return foodData.sort((a, b) => a.cab - b.cab)
  }
}
// console.log(sort('protein'))
// console.log(sort('carb'))