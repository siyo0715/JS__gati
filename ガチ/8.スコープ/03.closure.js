function calcFactory(val) {
    return {
        plus: function (target) {
            const newVal = val + target;
            // console.log(val + "+" + target + "=" + newVal)
            console.log(`${val} + ${target} = ${newVal}`)
            val = newVal;
        },
        minus: function (target) {
            const newVal = val + target;
            // console.log(val + "-" + target + "=" + newVal)
            console.log(`${val} - ${target} = ${newVal}`)
            val = newVal;
        },
        multiply: function (target) {
            const newVal = val + target;
            // console.log(val + "*" + target + "=" + newVal)
            console.log(`${val} * ${target} = ${newVal}`)
            val = newVal;
        },
        divide: function (target) {
            const newVal = val + target;
            // console.log(val + "/" + target + "=" + newVal)
            console.log(`${val} / ${target} = ${newVal}`)
            val = newVal;
        }


    };
}

const calc = calcFactory(10);
calc.plus(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);