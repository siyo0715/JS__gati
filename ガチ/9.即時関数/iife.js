function a() {
    console.log('called');
}

a();

// ↓即時関数に変えてみる

let b = function () {
    console.log('called')
}();


let c = (function () {
    console.log('called');
    return 0;
})()
console.log(c);

let d = (function (d) {
    console.log('called' + d);
    return 0;
})(10);
console.log(d);

let e = (function () {
    console.log('called');
    let privateVal = 0;
    let publicVal = 10;

    function privateFn() {
        console.log('privateFn is called')
    }
    function publicFn() {
        console.log('publicFn is called')
    }

    return {
        publicVal,
        publicFn
    };
    
})()
e.publicFn();

    console.log(e)

// グループ化演算子

// let b = (1 + 2) * 3;
// console.log(b)