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
console.log(c, d);


// オブジェクトconstは再代入可能

const e = {
    prop: 'hello'
}
//e = {}
e.prop = 'bye'
console.log(b)

// 関数の参照

let f = 0;

function fn1(arg1) {
    arg1 = 1;
    console.log(f.arg1)
}
// let arg1 = f;
// arg1 = 1;
// console.log(a, arg1)
fn1(f);
