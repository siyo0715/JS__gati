function incrementFactoty() {   
    let num = 0;
    function increment(){
        num = num + 1;
        console.log(num);
    }
    return increment;
}
const increment = incrementFactoty();

increment();
increment();
increment();
increment();