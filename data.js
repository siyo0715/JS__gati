//bは変わってもaは変わらない

let a = 'hello';
let b = a;
b = 'bye';
console.log(a, b);



//両方変わる
let c = {
    prop: 'hello'
}
let d = c;
d.prop = 'bye';
console.log(c,d)