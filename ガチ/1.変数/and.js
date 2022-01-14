// function who(name) {
//     if (!name) {
//         name = '誰ですか？'
//     } else {
//         console.log('あなたは' + name + 'ですか？');
//     }
// }
// who('小林')

function hello(name) {
    name = name || '小林';
    console.log('お前は' + name + 'Da!!!');
}
hello()

// let name = "山田";
// if (name) {
//     hello(name)
// }

let name = "山田";

name && hello(name);