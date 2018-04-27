

// let a = Array(10, 11, 0, 99, 99)
// let b = a
// console.log(b)
// b[0] = '30'
// function compore(value1, value2) {
//     if (value1 < value2) {
//         return 1
//     } else if (value1 >= value2) {
//         return -1
//     } else {
//         return 0
//     }
// }
// console.log(a.sort(compore))

// console.log(a.map(function(item, index, ary) {
//     return item * 2
// }))
// console.log(a.filter(function (item, index, ary) {
//     return item % 2 > 0
// }))
// console.log(a.every(function (item, index, ary) {
//     return item > 0
// }))
// console.log(a.some(function (item, index, ary) {
//     return item > 0
// }))
// console.log(a.forEach(function (item, index, ary) {  //  没有返回值
//     item + 1
// }))

// // 删除 插入
// console.log('splice', a.splice(0, 1, 66))

// let n = 10
// console.log(a.reduce(function (prev, cur, index, array) {
//     return prev + n
// }))

// function outer() {
//     inner('in-arg1', 'in-arg2')
// }
// function inner () {
//     name = 'Lisa'
//     console.log(arguments[0])
//     console.log(arguments[1])
// }
// outer('arg1')

// console.log(Math.max(11, 33, 1))

// let aa = '123';
// aa.toUpperCase()

// // aa.b = function(){
// //     console.log('1')
// // }

// aa.constructor.prototype.b = function () {
//     console.log('基本类型构造函数原型')
// }
// aa.b();



// let str = 'fun';

// str.toLocaleLowerCase();
// str.rrrrr();
// str.strruvb();


/**
 * let fun = new String(str);
 * fun.toLocaleLowerCase();
 * delete fun;
 * 
 */

// function fun(n, o) {
//     console.log(o);
//     return {
//         fun: function (m) {
//             return fun(m, n)
//         }
//     }
// }

// var a = fun(1).fun(2).fun(4).fun(8)

// var User = {
//     count: 1,
//     getCount: function () {
//         return this.count
//     }
// }
// var fn = User.getCount
// console.log(fn()); //undefined
// console.log(User.getCount())

/** 对象转数组，没有捷径 */
let str = {1: '11', 2: '22', 3: '33'}
let arry = []
for (o in str) {
    let obj = {}
    obj = { o: str[o]}
    arry.push(obj)
}
console.log(arry)

