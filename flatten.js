const voters = [];

voters.push({name: "Peter", age: 45, sin: 123456})
voters.push({name: "Maty", age: 42, sin: 234567})
voters.push({name: "Oliver", age: 11, sin: 345678})
voters.push({name: "Liz", age: 41, sin: 456789})

voters.forEach((item)=>{
  console.log('item: ', item);
  console.log("item.age: ", item.age)
})

console.log('voters[2].age: ', voters[2].age);