// task 1

// function calculate(a, b, ...args){
//     let product = 1;
//     for(const x in args){
//         let element = args[x]
//         product *= element
//         console.log(product)
//     }
//     let arr = [a+b, product];
//     console.log(arr)
// }

// calculate(10, 2, 4, 5, 100, 2)


// task 2
// const user = {
//     name: 'Tornike',
//     lastName: 'Tsereteli',
//     banks: [
//         {
//             address: {
//                 city: "Rome"
//             }
//         },
//         {
//             address: {
//                 city: "Lisbon"
//             }
//         },
//         {
//             address: {
//                 city: "Madrid"
//             }
//         }
//     ]
// // }

// function currentCity({banks}){
//     const { address: { city } = {} } = banks[2];
//     if(city !== undefined){
//         console.log(city)
//     }else{
//         console.log("Undefined")
//     }
// }

// currentCity(user)  



// task 3
const originalObject = {
    name: 'John',
    age: 25,
    address: {
        city: 'Madird',
        country: 'Spain',
        home: {
            first: "First",
            second: "Second"
        }
    },
    hobbies: ['reading', 'gaming', 'gym']
};

function shallowCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    const shallowCopyObj = Array.isArray(obj) ? [...obj] : { ...obj };
  
    for (let key in shallowCopyObj) {
      if (shallowCopyObj.hasOwnProperty(key)) {
        shallowCopyObj[key] = shallowCopy(shallowCopyObj[key]);
      }
    }
  
    return shallowCopyObj;
  }

let kopi = shallowCopy(originalObject)
kopi.address.city = 'barcelona'
console.log(kopi.address.city)
console.log(originalObject.address.city)