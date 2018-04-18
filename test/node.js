

/** 1.原型、原型链 */
    // function A() {
    //     this.name = 'Lisa'
    //     this.age = '18'
    // }
    // A.prototype.salary = '1000000'
    // console.log(A.prototype)
    // let a1 = new A()
    // console.log(a1 instanceof A)  // instanceof 指定对象是否为某个构造函数的实例,多整个原型链有效。
    // console.log(a1 instanceof Object)
    // console.log(typeof Object)   // 返回某个变量类型
    // console.log(a1)
    // console.log(a1.salary)
    // console.log(a1.constructor === A)
    // console.log(a1.constructor.prototype === A.prototype)
    // console.log(A.prototype.constructor === A)

    // console.log(a1.__proto__ === A.prototype)
    // console.log(A.prototype.__proto__ === Object.prototype)
    // console.log(Object.prototype.__proto__ === null)
    // console.log(A.prototype.prototype)
/**  结束  */

/** 2.证明javascript是单线程的 */
    // function foo1() {
    //     console.log("first");
    //     setTimeout(( function(){
    //         console.log( 'second' );
    //     }),0);
    //     console.log( 'third' );
    // }
    // for (var i = 0; i < 10; i++) {
    //     foo1();
    // }
/**  结束  */

/** 3.函数表达式
 *    函数声明
 *    立即执行函数
 */
    // function f1(){
    //     var n=999;
    //     nAdd = function add(){  // 没有使用var/let 关键字，相当于默认在创建一个全局函数，在f1外也能调用。
    //         n += 1
    //         console.log('nAdd是一个函数表达式，必须在声明后才能调用')
    //     }
    //     f2();
    //     function f2(){
    //         nAdd();
    //         console.log('f2是一个函数申明，可在任意地方调用')
    //     　　console.log(n);
    //     }
    // 　return f2;
    // }
    // f1();
    // (function nowFun() {
    //     console.log('这是一个立即执行函数')
    // })()  // 注意后面的(),必须有
    // var result = f1();
    // result(); // 999
    // nAdd();  // 闭包使用？？？
    // result(); // 1000
/**  结束  */

/** 4....操作符 */
    // const numbers = (...nums) => [...nums,1]; 
    // console.log(numbers(1,2,3,4,5,6,7,8,9)); //[1,2,3,4,5,6,7,8,9]
/**  结束  */

/** 5.箭头函数和非箭头函数 this指向 */
    // let s2 = 5;
    // function Timer() {
    //     this.s1 = 0;
    //     this.s2 = 0;
    //     // 箭头函数
    //     this.interval1 =  setInterval(() => this.s1++, 1000);  // 箭头函数，this.s1指向Timer内部的s1
    //     // 普通函数
    //     this.interval2 = setInterval(function () {  // 普通函数，this.s2指向运行时所在作用域（即全局对象）
    //         this.s2++;
    //         console.log(this.s2); // NaN 
    //     }, 1000);
    // }
    // var timer = new Timer();
    // setTimeout(() => console.log('s1: ', timer.s1), 3100);
    // setTimeout(() => console.log('s2: ', timer.s2), 3100);
    // setTimeout(() => console.log('全局s2: ', s2), 3100);
    // setTimeout(() => clearInterval(timer.interval1), 3600);
    // setTimeout(() => clearInterval(timer.interval2), 3600);

    // function foo() {
    //     return () => {
    //         return () => {
    //             return () => {
    //                 console.log('id:', this.id);
    //             };
    //         };
    //     };
    // }
    // var f = foo.call({id: 1});    // 箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。
    // var t1 = f.call({id: 2})()(); // id: 1
    // var t2 = f().call({id: 3})(); // id: 1
    // var t3 = f()().call({id: 4}); // id: 1
/**  结束  */

/** 6.作用域 */
    // var x = 1;
    // function foo(y = function() { x = 2; }) {
    // x = 3;
    // console.log(x); // 3
    // y();
    // console.log(x); // 2
    // }
    // foo()
    // console.log(x)  // 2

    // let Person = {
    //     name: 'Lisa',
    //     sayName() {
    //         return this.name;
    //     },
    //     sayName2: () => {
    //         return this.name
    //     }
    // }
    // console.log(Person.sayName())   // Lisa
    // console.log(Person.sayName2())  // undefined （因为指向window）
/**  结束  */

/** 7.call()/apply()/bind()/::双冒号运算符(es6)  均用来改变this指向
 * apply()方法 接收两个参数，一个是函数运行的作用域（this），另一个是参数数组。
 * call()方法 第一个参数和apply()方法的一样，但是传递给函数的参数必须列举出来。
 */
    // let foo = {name: 'Lisa'};
    // function Test () {
    //     function bar () {
    //         return this.name
    //     };
    //     foo::bar;
    //     // 等同于
    //     bar.bind(foo);

    //     foo::bar(...arguments);
    //     // 等同于
    //     bar.apply(foo, arguments);

    //     const hasOwnProperty = Object.prototype.hasOwnProperty;
    //     function hasOwn(obj, key) {
    //         return obj::hasOwnProperty(key);
    //     }
    // }

    /** 7.1 bind() 绑定后执行*/
        // window.num = 9; // 未在window对象上？？
        // var mymodule = {
        //     num: 81,
        //     getNum: function() { return this.num; }
        // };
        // console.log(mymodule.getNum()); // 81
        // var getNum = mymodule.getNum;
        // console.log(getNum());          // 9, 因为在这个例子中，"this"指向全局对象????(实际输出undefined) 
        //                                 //答案：node 不是浏览器，所以不存在widow对象,在浏览器运行。
        // // 创建一个'this'绑定到module的函数
        // var boundGetNum = getNum.bind(mymodule);
        // console.log(boundGetNum()); // 81 
    /** 结束 */

    /** 7.2 call()/apply() 绑定立即执行
     * call() 参数要列举
     * apply(）数组参数
    */
        // function add(c,d){
        //     return this.a + this.b + c + d;
        // }
        // var s = {a:1, b:2};
        // console.log(add.call(s,3,4)); // 1+2+3+4 = 10
        // console.log(add.apply(s,[5,6])); // 1+2+5+6 = 14 

        // window.firstName = "Cynthia";   // node 不是浏览器，所以不存在widow对象
        // window.lastName = "_xie";

        // var myObject = {firstName:'my', lastName:'Object'};

        // function getName(){
        //     console.log(this.firstName + this.lastName);
        // }

        // function getMessage(sex,age){
        //     console.log(this.firstName + this.lastName + " 性别: " + sex + " age: " + age );
        // }

        // getName.call(window); // Cynthia_xie
        // getName.call(myObject); // myObject

        // getName.apply(window); // Cynthia_xie
        // getName.apply(myObject);// myObject

        // getMessage.call(window,"女",21); //Cynthia_xie 性别: 女 age: 21
        // getMessage.apply(window,["女",21]); // Cynthia_xie 性别: 女 age: 21

        // getMessage.call(myObject,"未知",22); //myObject 性别: 未知 age: 22
        // getMessage.apply(myObject,["未知",22]); // myObject 性别: 未知 age: 22
    /** 结束 */
/** 结束 */

/** 8.闭包 */
    //     function f1(){
    // 　　　　var n = 999;
    // 　　　　nAdd = function() { n += 1} // nAdd是一个全局变量，是一个匿名函数，也是一个闭包。
    // 　　　　function f2() {
    // 　　　　　　console.log(n)
    // 　　　　}
    // 　　　　return f2;
    // 　　}
    //     let f = f1(); // f2被赋值给一个全局变量
    //     f();          // 这里通过f2访问了f1函数的内部变量n，f2能够读取函数f1的内部变量，因此函数f2是闭包
    //     nAdd();       // 全局变量，直接访问
    //     f();

    // var name = "The Window";
    // var object = {
    //     name : "My Object",
    //     getNameFunc : function(){
    //         function f3(){
    //             console.log(this.name)
    //             return this.name;
    //         };
    //         return f3;
    //     }
    // };
    // console.log(object.getNameFunc()()); // "TMy Object"

    // var name = "The Window";
    // var object = {
    //     name: "My Object",
    //     getNameFunc: function () {
    //         let that = this
    //         function f3() {
    //             console.log(this.name)  //"The Window"
    //             return that.name;
    //         };
    //         return f3;
    //     }
    // };
    // console.log(object.getNameFunc()()); // "TMy Object"
/** 结束 */

/** 9.继承(构造函数) */
    function Animal(age) {
        this.species = "动物";
        this.age = age;
    }
    function Cat(name, color) {
        this.name = name;
        this.color = color;
    }
    /** 
     * Cat 继承 animal
     * 1.构造函数绑定，使用call或apply方法，将父对象的构造函数绑定在子对象上
     */
    // function Cat(name,color){
    //     Animal.apply(this, arguments); // arguments = [name,color]
    //     // Animal.call(this, [name, color]); 
    //     this.name = name;
    //     this.color = color;
    // }
    // var cat1 = new Cat("大毛","黄色");
    // console.log(cat1.species); // 动物
    // console.log(cat1.age);  

    /** 
     * Cat 继承 animal
     * 2.prototype 如果"猫"的prototype对象，指向一个Animal的实例，那么所有"猫"的实例，就能继承Animal了。
     */
    // Cat.prototype = new Animal(22)
    // console.log(Cat.prototype.constructor == Animal); //true
    // Cat.prototype.constructor = Cat;
    // var cat1 = new Cat("大毛", "黄色");
    // console.log(cat1.species); // 动物
    
    /** 
     * Cat 继承 animal
     * 3.直接继承prototype 将animal不变的属性直接写入Animal.prototype
     */ 
    // function Animal() { }
    // Animal.prototype.species = "动物";
    // Cat.prototype = Animal.prototype;  // 此时任何对Cat.prototype的修改，都会反映到Animal.prototype上。（缺点）
    // Cat.prototype.constructor = Cat;   // 所以Animal.prototype.constructor = Cat
    // var cat1 = new Cat("大毛", "黄色");
    // console.log(cat1.species); // 动物

    /** 
     * Cat 继承 animal
     * 4.利用空对象作为中介继承prototype
     */
    // function Animal() { }
    // Animal.prototype.species = "动物";
    // function extend(Child, Parent) {
    //     var F = function () { };
    //     F.prototype = Parent.prototype;
    //     Child.prototype = new F();
    //     Child.prototype.constructor = Child;
    //     Child.uber = Parent.prototype;
    // }
    // extend(Cat, Animal);
    // var cat1 = new Cat("大毛", "黄色");
    // console.log(cat1.species); // 动物

    /** 
     * Cat 继承 animal
     * 5.浅拷贝继承，拷贝prototype属性
     */
    // function Animal() { }
    // Animal.prototype.species = "动物";
    // function extend2(Child, Parent) {
    //     var p = Parent.prototype;
    //     var c = Child.prototype;    
    //     for (var i in p) {
    //         c[i] = p[i];
    //     }
    //     c.uber = p;
    // }
    // extend2(Cat, Animal);
    // var cat1 = new Cat("大毛", "黄色");
    // console.log(cat1.species); // 动物

/** 结束 */

/** 10.继承（基本类型，非构造函数） */
    var Chinese = {
        nation: '中国',
        birthPlace: ['福建','云南'] 
    };
    // var Doctor = {
    // 　　career: '医生'
    // }

   /** 10.1 Object()方法 */
    // let Doctor = Object(Chinese)
    // Doctor.career = '医生'
    // console.log(Doctor.nation)

   /** 10.2 浅拷贝 */
    // function extendCopy(p) {
    //     let c = {}
    //     for (let i in p) {  // for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值。
    //        c[i] = p[i]
    //     }
    //     c.uber = p
    //     return c
    // }
    // let Doctor = extendCopy(Chinese)
    // console.log(Doctor.nation)
    // console.log(Doctor.birthPlace)
    // Doctor.birthPlace.push('xiamen') // 子对象被篡改
    // Chinese.birthPlace.push('kunming')
    // console.log(Chinese.birthPlace)  // 父对象也被篡改 （引用地址相同）
    // console.log(Doctor.birthPlace)
    
   /** 10.3 深拷贝 (10.2 如果父对象是对象或者数组)*/
    // function deepCopy(p, d = {}) {
    //     let c = d
    //     for (let i in p) {  // for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值。
    //         if (typeof p[i] === 'object') {
    //             c[i] = (p[i].constructor === Array) ? [] : {}
    //             deepCopy(p[i], c[i])
    //         } else {
    //             c[i] = p[i]
    //         }
    //     }
    //     return c
    // }
    // let Doctor = deepCopy(Chinese)
    // console.log(Doctor.nation)
    // console.log(Doctor.birthPlace)
    // Doctor.birthPlace.push('xiamen') // 子对象不会被篡改
    // Chinese.birthPlace.push('kunming')
    // console.log(Chinese.birthPlace)  // 父对象不会被篡改
    // console.log(Doctor.birthPlace)
    /** 结束 */

    /** 11. 算法*/
    let arr = [10,40,22,2,1,1,0,3,5,7]
    let len = arr.length
    function swapArray(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    /** 11.1 冒泡*/
        // for (let i = 0; i < len; i++) {
        //     for (let j = 1; j < len - i; j++) {
        //     if (arr[j] < arr[j - 1]) {
        //         swapArray(arr, j - 1, j);
        //     }
        //     }
        // }
    /** 结束 */
    /** 11.2 插入排序 */
        // for (let i = 1; i < len; i++) {
        //     for (let j = i; j > 0 && arr[j] < arr[j - 1] ; j--) {
        //         swapArray(arr, j, j - 1);
        //     }
        // }
    /** 结束 */
    /** 11.3 选择排序 */
        // let min = 0;
        // for (let i = 0; i < len; i++) {
        //     min = i
        //     for (let j = i + 1; j < len; j++) {
        //         if (arr[j] < arr[min]) {
        //             min = j
        //         }
        //     }
        //     swapArray(arr, i,min)
        // }
    /** 结束 */
    /** 11.4 快速排序 */
        // function quickSort (arr, low, high) {
        //     if (high <= low) {
        //         return
        //     }
        //     let j = position(arr, low, high);
        //     quickSort(arr, low, j - 1);
        //     quickSort(arr, j + 1, high)
        // }
        // function position(arr, low, high) {
        //     if (high <= low) {
        //         return
        //     }
        //     let i = low
        //     let j = high + 1
        //     let pv = low;
        //     while(true) {
        //         while (arr[++i] < arr[pv]) {
        //             if (i == high) {
        //                 break
        //             }
        //         }
        //         while(arr[--j] > arr[pv]){
        //             if (j == low) {
        //                 break
        //             }
        //         }
        //         if (i >= j) {
        //             break
        //         }
        //         swapArray(arr, i, j)
        //     }
        //     swapArray(arr, low, j)
        //     return j
        // }
        // quickSort(arr, 0, len - 1)
    /** 结束 */

    // console.log(arr)
    
    /** 12. Object.defineProperty */
        let o = {name: 'Lisa'}
        /**
         * writable 是否可被重写
         * enumerable 是否可枚举，默认false
         * configurable 是否可以删除目标属性或是否可以再次修改属性的特性，默认false
         */
        Object.defineProperty(o, 'age', { value: '19', writable: false, enumerable: true, configurable: false})
        o.age = '20'
        delete o.age
        console.log(o.age)
        console.log(o)
        /** getter setter
         * 当使用了getter或setter方法，不允许使用writable和value这两个属性
         */
        Object.defineProperty(o, 'country', {
            get: function () {
                return initValue
            },
            set: function (value) {
                initValue = value
            }
        })
        o.country = 'china'
        console.log(o.country)
    /** 结束 */

    
/** 结束 */


 


