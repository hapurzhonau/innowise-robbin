// const run =()=> {

//     setTimeout(()=> {
//         console.log('timeout')
//     }, 0)

//     console.log(1)

//     new Promise((resolve)=>  {
//         console.log('Promise')
//         setTimeout(()=> {
//             console.log('777')
//             resolve()
//         }, 0)
//     })
//     .then(()=> {
//         console.log('then1')
//     })
//     .then(()=> {
//         console.log('then2')
//     })

//     console.log(4)

//     setTimeout(()=> {
//         console.log('timeout2')
//     },0)

// }
// run()
// 1 promise 4 777 timeout then1 then2  timeout2

// function isPalindrome(str) {
//   // return str.split('').reverse().join('') === str;
//   // const arr = str.split('');
//   let res = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     res += str[i];
//   }
//   return res === str;
// }

// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('hello'));

// "racecar" → true  
//"hello" → false

// function isAnagram(str1, str2) {
//   return str1.split('').sort().join('') === str2.split('').sort().join('')
// }
// console.log(isAnagram('listen', 'silent'))
// "listen" и "silent" → true
// "arch" "trew" false

// const tree1 = [
//   {
//     value: 5,
//     childred: [
//       {
//         value: 10,
//         childred: [
//           {
//             value: 11,
//           },
//         ],
//       },
//       {
//         value: 7,
//         childred: [
//           {
//             value: 5,
//             childred: [
//               {
//                 value: 1,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: 2,
//     childred: [
//       {
//         value: 3,
//         childred: [
//           {
//             value: 4,
//           },
//         ],
//       },
//       {
//         value: 6,
//         childred: [
//           {
//             value: 3,
//             childred: [
//               {
//                 value: 1,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];



// const stack = (tree1) => {
//   let result = 0;
//   const stack = [];
//   tree1.forEach(element => {
//     stack.push(element) //?
//     while (stack.length) {
//       const node = stack.pop();
//       result += node.value;
//       if (node?.childred?.length) {
//         stack.push(...node.childred)
//       }
//     }
//   });

//   return result;

// };

// console.log(stack(tree1), "stack");

// const arr = [1, 4, 5, 8, 9, 13]
// function sum(arr) {
// return  arr.reduce((acc, el) => {
//     if (el % 2 === 0) {
//     return  acc + el;

//     } else {
//       return acc;
//     }
//   }, 0)

// }
// console.log(sum(arr))